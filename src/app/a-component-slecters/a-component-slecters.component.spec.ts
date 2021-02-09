import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AComponentSlectersComponent } from './a-component-slecters.component';

describe('AComponentSlectersComponent', () => {
  let component: AComponentSlectersComponent;
  let fixture: ComponentFixture<AComponentSlectersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AComponentSlectersComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AComponentSlectersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
