import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddDistributerComponent } from './add-distributer.component';

describe('AddDistributerComponent', () => {
  let component: AddDistributerComponent;
  let fixture: ComponentFixture<AddDistributerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddDistributerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddDistributerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
