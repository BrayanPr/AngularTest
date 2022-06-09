import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavbarBrayanComponent } from './navbar-brayan.component';

describe('NavbarBrayanComponent', () => {
  let component: NavbarBrayanComponent;
  let fixture: ComponentFixture<NavbarBrayanComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NavbarBrayanComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NavbarBrayanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
