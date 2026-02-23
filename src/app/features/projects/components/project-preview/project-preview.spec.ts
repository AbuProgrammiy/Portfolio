import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectPreview } from './project-preview';

describe('ProjectPreview', () => {
  let component: ProjectPreview;
  let fixture: ComponentFixture<ProjectPreview>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProjectPreview]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProjectPreview);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
