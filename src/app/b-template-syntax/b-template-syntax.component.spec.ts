import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BTemplateSyntaxComponent } from './b-template-syntax.component';

describe('BTemplateSyntaxComponent', () => {
  let component: BTemplateSyntaxComponent;
  let fixture: ComponentFixture<BTemplateSyntaxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BTemplateSyntaxComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BTemplateSyntaxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
