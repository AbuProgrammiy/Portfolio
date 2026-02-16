import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DotNetFramework } from './dot-net-framework';

describe('DotNetFramework', () => {
  let component: DotNetFramework;
  let fixture: ComponentFixture<DotNetFramework>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DotNetFramework]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DotNetFramework);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
