import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { SobreComponent } from './sobre.component';
import { SobreRoutingModule } from './sobre-routing.module';
import { ThemedSobreComponent } from './themed-sobre.component';

@NgModule({
  imports: [
    SobreRoutingModule,
    CommonModule,
    SharedModule,
  ],
  declarations: [
    SobreComponent,
    ThemedSobreComponent
  ]
})
export class SobreModule {

}