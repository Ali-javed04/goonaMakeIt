import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IconLandingComponent } from './icon-landing.component';

describe('IconLandingComponent', () => {
  let component: IconLandingComponent;
  let fixture: ComponentFixture<IconLandingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IconLandingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IconLandingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
