import { Routes } from '@angular/router';
import { PageNotFoundComponent } from './error-routing/not-found/not-found.component';
import { UncaughtErrorComponent } from './error-routing/error/uncaught-error.component';
import { View1Component } from './view1/view1.component';
import { View2Component } from './view2/view2.component';
import { View3Component } from './view3/view3.component';
import { View4Component } from './view4/view4.component';
import { View5Component } from './view5/view5.component';
import { View6Component } from './view6/view6.component';

export const routes: Routes = [
  { path: '', redirectTo: 'view1', pathMatch: 'full' },
  { path: 'error', component: UncaughtErrorComponent },
  { path: 'view1', component: View1Component, data: { text: 'View 1' } },
  { path: 'view2', component: View2Component, data: { text: 'View 2' } },
  { path: 'view3', component: View3Component, data: { text: 'View 3' } },
  { path: 'view4', component: View4Component, data: { text: 'View 4' } },
  { path: 'view5/:email_send', component: View5Component, data: { text: 'View 5' } },
  { path: 'view6', component: View6Component, data: { text: 'View 6' } },
  { path: '**', component: PageNotFoundComponent } // must always be last
];
