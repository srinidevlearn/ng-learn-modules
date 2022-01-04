import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserlistComponent } from './components/userlist/userlist.component';
import { UserregisterComponent } from './components/userregister/userregister.component';
import { UserupdateComponent } from './components/userupdate/userupdate.component';
import { UserresolverResolver } from './resolver/userresolver.resolver';

const routes: Routes = [
  {path:'addUser',component:UserregisterComponent},
  {path:'listUser',component:UserlistComponent,
    resolve:{user:UserresolverResolver}},
  {path:'updateUser/:id',component:UserupdateComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
