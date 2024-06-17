import { Component } from '@angular/core';
import { IGX_LIST_DIRECTIVES, IgxIconComponent } from 'igniteui-angular';

@Component({
  selector: 'app-view1',
  standalone: true,
  imports: [IGX_LIST_DIRECTIVES, IgxIconComponent],
  templateUrl: './view1.component.html',
  styleUrls: ['./view1.component.scss']
})
export class View1Component {}
