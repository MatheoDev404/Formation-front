export class Contact {
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