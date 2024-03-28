import {
  Component,
  Input,
} from '@angular/core';

import { Context } from '../core/shared/context.model';
import { ViewMode } from '../core/shared/view-mode.model';
import { CollectionElementLinkType } from '../shared/object-collection/collection-element-link.type';
import { SelectionConfig } from '../shared/search/search-results/search-results.component';
import { SearchConfigurationOption } from '../shared/search/search-switch-configuration/search-configuration-option.model';
import { ThemedComponent } from '../shared/theme-support/themed.component';
import { ConfigurationSearchPageComponent } from './configuration-search-page.component';

/**
 * Themed wrapper for ConfigurationSearchPageComponent
 */
@Component({
  selector: 'ds-configuration-search-page',
  styleUrls: [],
  templateUrl: '../shared/theme-support/themed.component.html',
  standalone: true,
  imports: [ConfigurationSearchPageComponent],
})
export class ThemedConfigurationSearchPageComponent extends ThemedComponent<ConfigurationSearchPageComponent> {
  /**
   * The list of available configuration options
   */
  @Input() configurationList: SearchConfigurationOption[];

  /**
   * The current context
   * If empty, 'search' is used
   */
  @Input() context: Context;

  /**
   * The configuration to use for the search options
   * If empty, 'default' is used
   */
  @Input() configuration;

  /**
   * The actual query for the fixed filter.
   * If empty, the query will be determined by the route parameter called 'filter'
   */
  @Input() fixedFilterQuery: string;

  /**
   * If this is true, the request will only be sent if there's
   * no valid cached version. Defaults to true
   */
  @Input() useCachedVersionIfAvailable;

  /**
   * True when the search component should show results on the current page
   */
  @Input() inPlaceSearch;

  /**
   * The link type of the listed search results
   */
  @Input() linkType: CollectionElementLinkType;

  /**
   * The pagination id used in the search
   */
  @Input() paginationId;

  /**
   * Whether or not the search bar should be visible
   */
  @Input() searchEnabled;

  /**
   * The width of the sidebar (bootstrap columns)
   */
  @Input() sideBarWidth;

  /**
   * The placeholder of the search form input
   */
  @Input() searchFormPlaceholder;

  /**
   * A boolean representing if result entries are selectable
   */
  @Input() selectable;

  /**
   * The config option used for selection functionality
   */
  @Input() selectionConfig: SelectionConfig;

  /**
   * A boolean representing if show csv export button
   */
  @Input() showCsvExport;

  /**
   * A boolean representing if show search sidebar button
   */
  @Input() showSidebar;

  /**
   * Whether to show the thumbnail preview
   */
  @Input() showThumbnails;

  /**
   * Whether to show the view mode switch
   */
  @Input() showViewModes;

  /**
   * List of available view mode
   */
  @Input() useUniquePageId: boolean;

  /**
   * List of available view mode
   */
  @Input() viewModeList: ViewMode[];

  /**
   * Defines whether or not to show the scope selector
   */
  @Input() showScopeSelector;

  /**
   * Whether or not to track search statistics by sending updates to the rest api
   */
  @Input() trackStatistics;

  /**
   * The default value for the search query when none is already defined in the {@link SearchConfigurationService}
   */
  @Input() query: string;

  /**
   * The fallback scope when no scope is defined in the url, if this is also undefined no scope will be set
   */
  @Input() scope: string;

  /**
   * Hides the scope in the url, this can be useful when you hardcode the scope in another way
   */
  @Input() hideScopeInUrl: boolean;

  protected inAndOutputNames: (keyof ConfigurationSearchPageComponent & keyof this)[] =
    ['context', 'configuration', 'fixedFilterQuery', 'inPlaceSearch', 'searchEnabled', 'sideBarWidth'];

  protected getComponentName(): string {
    return 'ConfigurationSearchPageComponent';
  }

  protected importThemedComponent(themeName: string): Promise<any> {
    return import(`../../themes/${themeName}/app/search-page/configuration-search-page.component`);
  }

  protected importUnthemedComponent(): Promise<any> {
    return import('./configuration-search-page.component');
  }

}
