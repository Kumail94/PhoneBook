import { Component, OnInit } from '@angular/core';
import { PhoneContacts } from '../model/PhoneContacts';
import { ContactsService } from '../services/conatcts.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-contacts-book',
  templateUrl: './contacts-book.component.html',
  styleUrls: ['./contacts-book.component.css']
})
export class ContactsBookComponent implements OnInit {
  contacts: PhoneContacts[];
  id;
  constructor(private contactsService: ContactsService , private _router : Router) {
    console.log("Contacts Book Constructor");
    
   }
  
  ngOnInit() {
    console.log('Contact Oninit Component');
    
    this.contactsService.contactLists.subscribe((response : PhoneContacts[]) => {
      this.contacts = response;
      console.log("Contacts = ",this.contacts);
    });
    this.contactsService.editedContactsIndex.subscribe((i : number) => {
      this.id = i;
    });
    let allContacts = this.contactsService.getAllContacts();
    console.log("All Contacts = " ,allContacts);
  }
  EditContacts(index:number) {
    this.contactsService.editedContactsIndex.next(index);
    this._router.navigate(['contacts']);

  }
  DeleteContacts() {
    this.contactsService.deleteContacts(this.id);
  }
  AddContacts() {
    this._router.navigate(['contacts']);
  }
  onLogout(){
    this._router.navigate(['auth']);
  }

}
