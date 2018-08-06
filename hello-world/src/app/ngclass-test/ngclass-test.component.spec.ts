import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgclassTestComponent } from './ngclass-test.component';

describe('NgclassTestComponent', () => {
  let component: NgclassTestComponent;
  let fixture: ComponentFixture<NgclassTestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgclassTestComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgclassTestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
