import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OtherSkills } from './other-skills';

describe('OtherSkills', () => {
  let component: OtherSkills;
  let fixture: ComponentFixture<OtherSkills>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OtherSkills]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OtherSkills);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
