import { NgModule, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContactsBookComponent } from 'src/app/contacts-book/contacts-book.component';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { SubmitContactsComponent } from 'src/app/contacts-book/submit-contacts/submit-contacts.component';

@NgModule({
  declarations: [
    ContactsBookComponent,
    SubmitContactsComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild([
      {path : 'contacts' , component :ContactsBookComponent}
    ])
  ]
})
export class ContactsModule { }
