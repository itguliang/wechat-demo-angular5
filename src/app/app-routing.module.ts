import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ChatListComponent } from './chat-list/chat-list.component';
import { ContactsComponent } from './contacts/contacts.component';
import { DiscoverComponent } from './discover/discover.component';
import { AccountComponent } from './account/account.component';

import { ChatDetailComponent } from './chat-detail/chat-detail.component';

const routes: Routes = [
  { path: '', redirectTo: '/chatlist', pathMatch: 'full' },
  { path: 'chatlist', component: ChatListComponent },
  { path: 'contacts', component: ContactsComponent },
  { path: 'discover', component: DiscoverComponent },
  { path: 'account', component: AccountComponent },
  { path: 'chatdetail/:id', component: ChatDetailComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
