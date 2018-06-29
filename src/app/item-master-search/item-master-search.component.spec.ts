import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemMasterSearchComponent } from './item-master-search.component';

describe('ItemMasterSearchComponent', () => {
  let component: ItemMasterSearchComponent;
  let fixture: ComponentFixture<ItemMasterSearchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ItemMasterSearchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ItemMasterSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
