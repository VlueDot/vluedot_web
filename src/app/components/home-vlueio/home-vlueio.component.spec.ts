import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeVlueioComponent } from './home-vlueio.component';

describe('HomeVlueioComponent', () => {
  let component: HomeVlueioComponent;
  let fixture: ComponentFixture<HomeVlueioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HomeVlueioComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HomeVlueioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
