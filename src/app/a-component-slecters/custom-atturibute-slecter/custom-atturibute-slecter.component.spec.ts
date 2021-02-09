import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomAttuributeSlecterComponent } from './custom-atturibute-slecter.component';

describe('CustomAttuributeSlecterComponent', () => {
  let component: CustomAttuributeSlecterComponent;
  let fixture: ComponentFixture<CustomAttuributeSlecterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CustomAttuributeSlecterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomAttuributeSlecterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
