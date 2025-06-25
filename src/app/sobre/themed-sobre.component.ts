import { Component } from '@angular/core';

import { ThemedComponent } from '../shared/theme-support/themed.component';
import { SobreComponent } from './sobre.component';

/**
 * Themed wrapper for SobreComponent
 */
@Component({
  selector: 'ds-sobre',
  styleUrls: [],
  templateUrl: '../shared/theme-support/themed.component.html',
  standalone: true,
  imports: [SobreComponent],
})
export class ThemedSobreComponent extends ThemedComponent<SobreComponent> {
  protected getComponentName(): string {
    return 'SobreComponent';
  }

  protected importThemedComponent(themeName: string): Promise<any> {
    return import(`../../themes/${themeName}/app/sobre/sobre.component`);
  }

  protected importUnthemedComponent(): Promise<any> {
    return import(`./sobre.component`);
  }

}
