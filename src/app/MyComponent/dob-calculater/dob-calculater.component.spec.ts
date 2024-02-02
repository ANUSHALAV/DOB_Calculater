import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DOBCalculaterComponent } from './dob-calculater.component';

describe('DOBCalculaterComponent', () => {
  let component: DOBCalculaterComponent;
  let fixture: ComponentFixture<DOBCalculaterComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DOBCalculaterComponent]
    });
    fixture = TestBed.createComponent(DOBCalculaterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
