import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './auth/login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { BanksComponent } from './banks/banks.component';
import { CustomersComponent } from './customers/customers.component';
import { StatesComponent } from './states/states.component';
import { TransactionsComponent } from './transactions/transactions.component';
import { MessagesComponent } from './messages/messages.component';
import { InteractionsComponent } from './interactions/interactions.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DashboardComponent,
    BanksComponent,
    CustomersComponent,
    StatesComponent,
    TransactionsComponent,
    MessagesComponent,
    InteractionsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
