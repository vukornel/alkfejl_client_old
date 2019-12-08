import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule, MatSelectModule, MatIconModule, MatToolbarModule, MatButtonToggleModule, MatInputModule, MatMenuModule, MatFormFieldModule } from '@angular/material'; // <-- this
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { RoutingModule } from './routing/routing.module'; // <-- this
import { DrinkListComponent } from './drink-list/drink-list.component';
import { LoginFormComponent } from './login-form/login-form.component';
import { DrinkCreateComponent } from './drink-create/drink-create.component';
import { UserListComponent } from './user-list/user-list.component';
import { UserFormComponent } from './user-form/user-form.component';
import { UserService } from './user-service.service';
import { DrinkService } from './drink.service';
import { BeerListComponent } from './beer-list/beer-list.component';
import { BeerFormComponent } from './beer-form/beer-form.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginFormComponent,
    DrinkListComponent,
    DrinkCreateComponent,
    UserListComponent,
    UserFormComponent,
    UserListComponent,
    BeerListComponent,
    BeerFormComponent,
  ],
  imports: [
    NgbModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonToggleModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatMenuModule,
    RoutingModule,
  ],
  providers: [UserService, DrinkService],
  bootstrap: [AppComponent]
})
export class AppModule { }
