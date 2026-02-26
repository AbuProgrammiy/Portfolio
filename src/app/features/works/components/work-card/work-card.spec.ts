import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkCard } from './work-card';

describe('WorkCard', () => {
  let component: WorkCard;
  let fixture: ComponentFixture<WorkCard>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WorkCard]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WorkCard);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
