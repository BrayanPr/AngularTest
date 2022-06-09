import { Component, OnInit } from '@angular/core';
import { CustomersService } from 'src/app/services/customers.service';
@Component({
  selector: 'app-customers',
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.css']
})
export class CustomersComponent implements OnInit {
  customers:any=[];
  constructor(public service: CustomersService) { }

  ngOnInit(): void {
    this.customers = this.service.GetCustomers()
  }

}
