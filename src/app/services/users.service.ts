import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  users: any = [{
    name: 'Juaquin Fierros',
    age: 36,
    jobTitle: 'Job Title'
  },
  {
    name: 'Pedro Navajas',
    age: 20,
    jobTitle: 'Job Title'
  },
  {
    name: 'Toño Narajas',
    age: 36,
    jobTitle: 'Job Title'
  }];
  constructor() { 
    
  }
  GetUsers(){
    return this.users
  }
}
