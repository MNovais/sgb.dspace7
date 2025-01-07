import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ThemedSobreComponent } from './themed-sobre.component';

import { I18nBreadcrumbResolver } from '../core/breadcrumbs/i18n-breadcrumb.resolver';

@NgModule({
  imports: [
    RouterModule.forChild([
      {
        path: '',
        component: ThemedSobreComponent,
        resolve: {
          breadcrumb: I18nBreadcrumbResolver
        },
        data: { title: 'sobre', breadcrumbKey: 'sobre' }
      }
    ])
  ]
})
export class SobreRoutingModule { }
