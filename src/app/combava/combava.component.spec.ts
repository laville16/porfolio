import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CombavaComponent } from './combava.component';

describe('CombavaComponent', () => {
  let component: CombavaComponent;
  let fixture: ComponentFixture<CombavaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CombavaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CombavaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
