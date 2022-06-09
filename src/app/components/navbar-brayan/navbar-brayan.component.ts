import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-navbar-brayan',
  templateUrl: './navbar-brayan.component.html',
  styleUrls: ['./navbar-brayan.component.css']
})
export class NavbarBrayanComponent implements OnInit {

  constructor(public router: Router) { }

  ngOnInit(): void {
  }

}
