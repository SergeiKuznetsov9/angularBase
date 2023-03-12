import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListRout1Component } from './routes/list-rout1/list-rout1.component';
import { ListRout2Component } from './routes/list-rout2/list-rout2.component';

const routes: Routes = [
  {path: 'list1', component: ListRout1Component},
  {path: 'list2', component: ListRout2Component},
  /* {path: '', redirectTo: 'list1', pathMatch: 'full'}, */
];

//Это модуль роутинга 
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
