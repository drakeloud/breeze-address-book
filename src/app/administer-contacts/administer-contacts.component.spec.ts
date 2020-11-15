import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdministerContactsComponent } from './administer-contacts.component';

describe('AdministerContactsComponent', () => {
  let component: AdministerContactsComponent;
  let fixture: ComponentFixture<AdministerContactsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdministerContactsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdministerContactsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
