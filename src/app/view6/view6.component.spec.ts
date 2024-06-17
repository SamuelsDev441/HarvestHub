import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientTestingModule } from '@angular/common/http/testing';

import { IGX_STEPPER_DIRECTIVES, IgxButtonDirective, IgxRippleDirective, IGX_INPUT_GROUP_DIRECTIVES, IgxIconButtonDirective, IgxIconComponent } from 'igniteui-angular';
import { View6Component } from './view6.component';

describe('View6Component', () => {
  let component: View6Component;
  let fixture: ComponentFixture<View6Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ View6Component ],
      imports: [ NoopAnimationsModule, FormsModule, HttpClientTestingModule, IGX_STEPPER_DIRECTIVES, IgxButtonDirective, IgxRippleDirective, IGX_INPUT_GROUP_DIRECTIVES, IgxIconButtonDirective, IgxIconComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(View6Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
