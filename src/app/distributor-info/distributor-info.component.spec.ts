import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DistributorInfoComponent } from './distributor-info.component';

describe('DistributorInfoComponent', () => {
  let component: DistributorInfoComponent;
  let fixture: ComponentFixture<DistributorInfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DistributorInfoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DistributorInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
