import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AnimeteoComponent } from './animeteo.component';

describe('AnimeteoComponent', () => {
  let component: AnimeteoComponent;
  let fixture: ComponentFixture<AnimeteoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AnimeteoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AnimeteoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
