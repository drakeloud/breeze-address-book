import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdministerContactsComponent } from './administer-contacts/administer-contacts.component';
import { ListContactsComponent } from './list-contacts/list-contacts.component';

const routes: Routes = [
  { path: '', component: ListContactsComponent },
  { path: 'contacts/:id', component: AdministerContactsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
