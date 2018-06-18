import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Contact } from '../shared/models/contact';

@Component({
  selector: 'app-ajouter',
  templateUrl: './ajouter.component.html',
  styleUrls: ['./ajouter.component.css']
})
export class AjouterComponent implements OnInit {

  @Output() unContactEstCree = new EventEmitter();
  nouveauContact: Contact = new Contact();
  active = true;
  constructor() { }

  ngOnInit() {
  }

  // fonction appelé après le submit du formulaire.
  submitContact(){

    // Lorsque mon formulaire est soumis ma fonction submitContact() s'execute
    
    this.unContactEstCree.emit({leContact: this.nouveauContact});
    
    
    //après avoir emis le nouveau contact , on va le réinitialiser 
    this.nouveauContact = new Contact();
    
    // Je passe mon formulaire à false puis immediatement à true, ce qui a pour conséquances de suprimer pour de recréer dans le DOM.
    this.active = false ;

    setTimeout(()=> this.active = true, 0)
  }

}
