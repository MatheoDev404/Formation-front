
// POur déclarer une class comme composat de notre app, on import Component via @angular/core
import { Component } from '@angular/core';

class Contact {
  id : number;
  name: string;
  username: string;
  email: string;
  // le "?" permet de specifier que c'est facultatif
  address?: object;
  phone?: number;
  website?: string;
  company?: object;
}

// @Componant est un décorateur, il va nous ermetre de definir 3 parametre essentiel a notre app...
@Component({

  // Le selecteur (selector) determine la manière dont le composant serra affiché dans notre html: <app-root></app-root>
  selector: 'app-root',
  // On lie le fichier html 
  templateUrl: './app.component.html',
  // On lie le fichier css 
  styleUrls: ['./app.component.css']
})

// La class contient les données du composant, mais aussi son comportement ( propriétés et methodes )
// Dans notre context MVVM notre class correspond au viewModel.
export class AppComponent {

  // Déclaration d'une variable titre
  title = 'ContactApp';

  // Contact choisi par mon utilisateur
  contactActif: Contact ;

  //déclaration d'un objet Contact
  unContact: Contact = {
    id : 1,
    name: "Mathéo STUNAULT",
    username: "Mathéo STUNAULT",
    email: "stunaultmatheo.dev@gmail.com"
  };

  // Tableau de contacts
  mesContacts: Contact[] = [
    {
      id : 1,
      name: "Mathéo STUNAULT",
      username: "Mathéo STUNAULT",
      email: "stunaultmatheo.dev@gmail.com"
    },
    {
      id : 2,
      name: "Hugo LIEGEARD",
      username: "Hugo LIEGEARD",
      email: "wf3.dev@gmail.com"
    },
    {
      id : 3,
      name: "Riki NDINGA",
      username: "Riki NDINGA",
      email: "wf3.dev@gmail.com"
    },
    {
      id : 4,
      name: "Julien CALCERRADA",
      username: "Julien CALCERRADA",
      email: "wf3.dev@gmail.com"
    }
  ];


  // Ma fonction prend un Contact en parametre et le transmet a ma variable contactActif
  displayContact (contactClick: Contact){
    this.contactActif = contactClick; 
  };
}
