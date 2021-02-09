import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BDataBintingComponent } from './b-data-binting.component';

describe('BDataBintingComponent', () => {
  let component: BDataBintingComponent;
  let fixture: ComponentFixture<BDataBintingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BDataBintingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BDataBintingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
