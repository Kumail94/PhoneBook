import { Injectable } from '@angular/core';
import { PhoneContacts } from '../model/PhoneContacts';
import { BehaviorSubject, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ContactsService {

  constructor() { }
  contactLists = new BehaviorSubject<PhoneContacts[]>(null);
  editedContactsIndex = new Subject<Number>();
  private contacts : PhoneContacts[] = [
    new PhoneContacts('Brayn' , 9293732),
    new PhoneContacts('Kevin' , 3273385),
    new PhoneContacts('Jack' , 2283712),
    new PhoneContacts('Mark' , 32091252),
    new PhoneContacts('Orton', 45420292),
  ];
   
   getAllContacts() {
    return this.contactLists.next(this.contacts.slice());
   }
   getContactDetail(index : number){
      return this.contacts[index];
   } 
   addContacts(contacts : PhoneContacts){
     this.contacts.push(contacts);
     this.contactLists.next(this.contacts.slice());
    }
   editContacts(index : number , contacts : PhoneContacts){
     this.contacts[index] = contacts;
      this.contactLists.next(this.contacts.slice());
    }
   deleteContacts(index : number){
     this.contacts.splice(index , 1);
      this.contactLists.next(this.contacts.slice());
   
   }
}
