import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContactsBookComponent } from 'src/app/contacts-book/contacts-book.component';
import { FormsModule } from '@angular/forms';




@NgModule({
  declarations: [
    ContactsBookComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ]
})
export class ContactsModule { }
