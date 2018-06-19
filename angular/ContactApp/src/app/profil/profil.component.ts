import { Component, OnInit, Input } from '@angular/core';
import { Contact } from '../shared/models/contact';

@Component({
  selector: 'app-profil',
  templateUrl: './profil.component.html',
  styleUrls: ['./profil.component.css']
})
export class ProfilComponent implements OnInit {


  // Le @Input() sert a dire que notre composent "profil" que la variable contact est attendue en entrée.
  @Input() contact: Contact;

  constructor() { }

  ngOnInit() {
  }

}
