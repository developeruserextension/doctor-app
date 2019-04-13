import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SpecialistSectionComponent } from './specialist-section.component';

describe('SpecialistSectionComponent', () => {
  let component: SpecialistSectionComponent;
  let fixture: ComponentFixture<SpecialistSectionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SpecialistSectionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SpecialistSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
