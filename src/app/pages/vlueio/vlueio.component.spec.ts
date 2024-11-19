import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VlueioComponent } from './vlueio.component';

describe('VlueioComponent', () => {
  let component: VlueioComponent;
  let fixture: ComponentFixture<VlueioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VlueioComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VlueioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
