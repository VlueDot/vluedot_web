import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TariusLandpageComponent } from './tarius-landpage.component';

describe('TariusLandpageComponent', () => {
  let component: TariusLandpageComponent;
  let fixture: ComponentFixture<TariusLandpageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TariusLandpageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TariusLandpageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
