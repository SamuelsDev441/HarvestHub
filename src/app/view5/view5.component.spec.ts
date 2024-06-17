import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';

import { IgxButtonDirective, IgxRippleDirective, IGX_INPUT_GROUP_DIRECTIVES } from 'igniteui-angular';
import { View5Component } from './view5.component';

describe('View5Component', () => {
  let component: View5Component;
  let fixture: ComponentFixture<View5Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ View5Component ],
      imports: [ NoopAnimationsModule, FormsModule, IgxButtonDirective, IgxRippleDirective, IGX_INPUT_GROUP_DIRECTIVES ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(View5Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
