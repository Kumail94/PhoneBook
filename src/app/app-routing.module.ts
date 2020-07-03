import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthComponent } from './auth/auth.component';
import { ContactsBookComponent } from './contacts-book/contacts-book.component';
import { SubmitContactsComponent } from './contacts-book/submit-contacts/submit-contacts.component';



const routes: Routes = [
  { path: '', redirectTo: '/auth', pathMatch: 'full' },
  { path: 'auth', component: AuthComponent },
  { path: 'ContactDetails', component: ContactsBookComponent},
  {path : 'contacts' , component : SubmitContactsComponent},


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
