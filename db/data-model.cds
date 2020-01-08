namespace lgpd;
using { User, Country, managed } from '@sap/cds/common';

entity Products {
	key ID     : Integer;
	title      : String;
}

entity ProductsOptIn {
  key ID     : Integer;
  optin      : String(1);
  person     : Association to Persons;
  product    : Association to Products;
}

entity Persons {
  key ID : Decimal(10,0);
  name   : String;
  products  : Association to many ProductsOptIn on products.person = $self;
}