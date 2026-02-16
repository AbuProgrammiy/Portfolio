import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AngularFramework } from './angular-framework';

describe('AngularFramework', () => {
  let component: AngularFramework;
  let fixture: ComponentFixture<AngularFramework>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AngularFramework]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AngularFramework);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
