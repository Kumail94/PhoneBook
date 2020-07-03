import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

import { Router } from '@angular/router';
import { ContactsService } from 'src/app/services/conatcts.service';
import { PhoneContacts } from 'src/app/model/PhoneContacts';

@Component({
  selector: 'app-submit-contacts',
  templateUrl: './submit-contacts.component.html',
  styleUrls: ['./submit-contacts.component.css']
})
export class SubmitContactsComponent implements OnInit {
  isUpdate = false;
  editIndex;
  updatedContacts;
  @ViewChild('submitForm', { static: false }) slForm: NgForm
  constructor(private _contactService: ContactsService, private _router: Router) {
    console.log("Submit Constructor");
  }

  ngOnInit() {
    console.log("Submit OnInit");
    this._contactService.editedContactsIndex.subscribe((index: number) => {
      this.editIndex = index;
      this.isUpdate = true;
      this.updatedContacts = this._contactService.getContactDetail(index);
      console.log("Updated Contacts = ", this.updatedContacts);
      setTimeout(() => {
        this.slForm.setValue({
          Name: this.updatedContacts.Name,
          Contact: this.updatedContacts.Contact
        });
      });
      console.log("Sl Form : ", this.slForm.value);
    })
  }
  onSubmit(form: NgForm) {
    if (!form.valid) {
      return
    }
    console.log(form.value);

    const name = form.value.Name;
    const contact = form.value.Contact
    const data = new PhoneContacts(name, contact);
    if (this.isUpdate) {
      this._contactService.editContacts(this.editIndex, data);
      this._router.navigate(['ContactDetails']);
    } else {
      this._contactService.addContacts(data);
      this._router.navigate(['ContactDetails']);
      this.isUpdate = false;
    }


  }

}