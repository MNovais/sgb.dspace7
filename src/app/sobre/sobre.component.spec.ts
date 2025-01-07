import { NO_ERRORS_SCHEMA } from '@angular/core';
import { waitForAsync, ComponentFixture, TestBed } from '@angular/core/testing';
import { TranslateModule } from '@ngx-translate/core';

import { SobreComponent } from './sobre.component';

describe('SobreComponent', () => {
  let comp: SobreComponent;
  let fixture: ComponentFixture<SobreComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [
        TranslateModule.forRoot()
      ],
      declarations: [SobreComponent],
      schemas: [NO_ERRORS_SCHEMA]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SobreComponent);
    comp = fixture.componentInstance; // SearchPageComponent test instance
    fixture.detectChanges();
  });

  it('should create instance', () => {
    expect(comp).toBeDefined();
  });

});
