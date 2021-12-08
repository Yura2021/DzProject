import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InfoComponent } from './info/info.component';
import { PageUndefineComponent } from './page-undefine/page-undefine.component';

const routes: Routes = [
  {path:'',redirectTo:'/info',pathMatch:'full'},
  {path:'info',component:InfoComponent},
  {path:'**',component:PageUndefineComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
