import { Injectable } from '@angular/core';

import { ICustomer } from './interfaces';

@Injectable()
export class TrackByService {
  
  customer(index:number, customer: ICustomer) {
    return customer.id;
  }

  order(index:number) {
    return index;
  }


  
}