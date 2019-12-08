import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AuthGuard } from '../auth.guard';
import { DrinkListComponent } from "../drink-list/drink-list.component";
import { LoginFormComponent } from '../login-form/login-form.component';
import { DrinkCreateComponent } from '../drink-create/drink-create.component';
//import { DrinkDetailComponent } from '../drink-detail/drink-detail.component';

import { UserListComponent } from '../user-list/user-list.component';
import { UserFormComponent } from '../user-form/user-form.component';

import { BeerListComponent } from '../beer-list/beer-list.component';
import { BeerFormComponent } from '../beer-form/beer-form.component';

const routes: Routes = [
  {path: '', redirectTo: '/drink/wines', pathMatch: 'full'},
  {path: 'drinks', component: DrinkListComponent/*, canActivate: [AuthGuard]*/},
  {path: 'drink/create/wine', component: DrinkCreateComponent},

  {path: 'users', component: UserListComponent },
  {path: 'adduser', component: UserFormComponent },

  
  {path: 'drink/beers', component: BeerListComponent/*, canActivate: [AuthGuard]*/},
  {path: 'drink/create/beer', component: BeerFormComponent},
  /*
  {
    path: 'drinks/:id',
    component: DrinkDetailComponent
  },*/
  { path: 'login', component: LoginFormComponent},
];

@NgModule({
  imports: [ RouterModule.forRoot(routes)],
  exports: [ RouterModule ],
  declarations: []
})
export class RoutingModule { }