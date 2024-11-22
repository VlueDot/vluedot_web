import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClientspartnersComponent } from './clientspartners.component';

describe('ClientspartnersComponent', () => {
  let component: ClientspartnersComponent;
  let fixture: ComponentFixture<ClientspartnersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ClientspartnersComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ClientspartnersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
