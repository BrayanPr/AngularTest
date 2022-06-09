import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CustomersService {
  customers: any[] = [{
    name: 'Juaquin Fierros Customer',
    age: 36,
    user: 'Juaquin Fierros'
  },
  {
    name: 'Pedro Navajas Customer',
    age: 20,
    user: 'Pedro Navajas'
  },
  {
    name: 'Toño Narajas Customer',
    age: 36,
    user: 'Toño Narajas'
  }];
  constructor() { }
  GetCustomers(){
    return this.customers
  }
}
