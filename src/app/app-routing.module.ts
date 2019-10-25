import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoginComponent } from './auth/login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { BanksComponent } from './banks/banks.component';
import { CustomersComponent } from './customers/customers.component';
import { StatesComponent } from './states/states.component';
import { TransactionsComponent } from './transactions/transactions.component';
import { MessagesComponent } from './messages/messages.component';
import { InteractionsComponent } from './interactions/interactions.component';

import { BankDetailsComponent } from './banks/bank-details/bank-details.component';
import { StateDetailsComponent } from './states/state-details/state-details.component';

const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'dashboard', component: DashboardComponent },

  { path: 'customers', component: CustomersComponent },

  { path: 'states', component: StatesComponent },
  { path: 'state/lagos-state', component: StateDetailsComponent },

  { path: 'banks', component: BanksComponent },
  { path: "bank/first-bank", component: BankDetailsComponent },

  { path: 'messages', component: MessagesComponent },

  { path: 'interactions', component: InteractionsComponent },

  { path: 'transactions', component: TransactionsComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
