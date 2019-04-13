import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DoctorSectionComponent } from './doctor-section.component';

describe('DoctorSectionComponent', () => {
  let component: DoctorSectionComponent;
  let fixture: ComponentFixture<DoctorSectionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DoctorSectionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DoctorSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
