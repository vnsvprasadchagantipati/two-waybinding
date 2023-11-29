import { Routes } from '@angular/router';
import { Demo1Component } from './demo1/demo1.component';
import { Demo2Component } from './demo2/demo2.component';
import { StudentViewComponent } from './student-view/student-view.component';
import { Demo4Component } from './demo4/demo4.component';
import { Demo5Component } from './demo5/demo5.component';
import { MovieViewComponent } from './movie-view/movie-view.component';


export const routes: Routes = [
  { path: 'demo1', component: Demo1Component },
  { path: 'demo2', component: Demo2Component },
  { path: 'student-view', component: StudentViewComponent },
  {path:'demo4',component:Demo4Component},
  {path:'demo5',component:Demo5Component},
  { path: 'movie-view', component: MovieViewComponent }
 
];
