import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Skils } from './skils';

describe('Skils', () => {
  let component: Skils;
  let fixture: ComponentFixture<Skils>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Skils]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Skils);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
