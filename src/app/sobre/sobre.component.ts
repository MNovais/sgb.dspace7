import { Component } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'ds-base-sobre',
  templateUrl: './sobre.component.html',
  styleUrls: ['./sobre.component.scss'],
  standalone: true,
  imports: [TranslateModule],
})
/**
 * Component displaying the Sobre Statement
 */
export class SobreComponent {
}
