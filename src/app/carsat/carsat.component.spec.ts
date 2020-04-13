import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CarsatComponent } from './carsat.component';

describe('CarsatComponent', () => {
  let component: CarsatComponent;
  let fixture: ComponentFixture<CarsatComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CarsatComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CarsatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
