import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VcoreLandpageComponent } from './vcore-landpage.component';

describe('VcoreLandpageComponent', () => {
  let component: VcoreLandpageComponent;
  let fixture: ComponentFixture<VcoreLandpageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VcoreLandpageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VcoreLandpageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
