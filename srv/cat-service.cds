using { lgpd, sap.common } from '../db/data-model';

service CatalogService {
  entity Person @readonly as projection on lgpd.Persons{
  					*,
  					products: redirected to OptIn
  };	
  entity Product @readonly as projection on lgpd.Products;
  entity OptIn @readonly as projection on lgpd.ProductsOptIn{
					*,
					person: redirected to Person
  };
}