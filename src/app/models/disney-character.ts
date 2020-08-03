export class DisneyCharacter {
  name: string;
  id: number;
  companyName: string;
  isFavorite: boolean;
  smallImageURL: string;
  largeImageURL: string;
  emailAddress: string;
  birthdate: Date;
  phone: {
    work: string;
    home: string;
    mobile: string;
  };
  address: {
    street: string;
    city: string;
    state: string;
    country: string;
    zipCode: number;
  };
}
