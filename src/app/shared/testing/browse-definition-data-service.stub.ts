import { EMPTY, Observable, of as observableOf } from 'rxjs';
import { RemoteData } from '../../core/data/remote-data';
import { buildPaginatedList, PaginatedList } from '../../core/data/paginated-list.model';
import { BrowseDefinition } from '../../core/shared/browse-definition.model';
import {
  getPaginatedListPayload,
  getRemoteDataPayload
} from '../../core/shared/operators';
import { BrowseService } from '../../core/browse/browse.service';
import { distinctUntilChanged, map, startWith } from 'rxjs/operators';
import { isEmpty, isNotEmpty } from '../empty.util';
import { createSuccessfulRemoteDataObject } from '../remote-data.utils';
import { PageInfo } from '../../core/shared/page-info.model';
import { FollowLinkConfig } from '../utils/follow-link-config.model';
import { RequestParam } from '../../core/cache/models/request-param.model';

// This data is in post-serialized form (metadata -> metadataKeys)
export const mockData: BrowseDefinition[] = [
      Object.assign(new BrowseDefinition, {
      'id' : 'dateissued',
      'metadataBrowse' : false,
      'dataType' : 'date',
      'sortOptions' : EMPTY,
      'order' : 'ASC',
      'type' : 'browse',
      'metadataKeys' : [ 'dc.date.issued' ],
      '_links' : EMPTY
     }),
     Object.assign(new BrowseDefinition, {
      'id' : 'author',
      'metadataBrowse' : true,
      'dataType' : 'text',
      'sortOptions' : EMPTY,
      'order' : 'ASC',
      'type' : 'browse',
      'metadataKeys' : [ 'dc.contributor.*', 'dc.creator' ],
      '_links' : EMPTY
    })
];

export const browseServiceStub = {
  getBrowseDefinitions(): Observable<RemoteData<PaginatedList<BrowseDefinition>>> {
    return observableOf(createSuccessfulRemoteDataObject(buildPaginatedList(new PageInfo(), mockData)));
  },
};

export const BrowseDefinitionDataServiceStub: any = {

  /**
   * Get all BrowseDefinitions
   */
  findAll(): Observable<RemoteData<PaginatedList<BrowseDefinition>>> {
    return observableOf(createSuccessfulRemoteDataObject(buildPaginatedList(new PageInfo(), mockData)));
  },

  /**
   * Get all BrowseDefinitions with any link configuration
   */
  findAllLinked(): Observable<RemoteData<PaginatedList<BrowseDefinition>>> {
    return observableOf(createSuccessfulRemoteDataObject(buildPaginatedList(new PageInfo(), mockData)));
  },

  /**
   * Get the browse URL by providing a list of metadata keys
   * @param metadatumKey
   * @param linkPath
   */
  findByFields(metadataKeys: string[]): Observable<RemoteData<BrowseDefinition>> {
    let searchKeyArray: string[] = [];
    metadataKeys.forEach((metadataKey) => {
      searchKeyArray = searchKeyArray.concat(BrowseService.toSearchKeyArray(metadataKey));
    });
    // Return just the first, as a pretend match
    return observableOf(createSuccessfulRemoteDataObject(mockData[0]));
  }

};
