import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClassSelecterComponent } from './class-selecter.component';

describe('ClassSelecterComponent', () => {
  let component: ClassSelecterComponent;
  let fixture: ComponentFixture<ClassSelecterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ClassSelecterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ClassSelecterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
