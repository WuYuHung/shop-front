import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShopSingleComponent } from './shop-single.component';

describe('ShopSingleComponent', () => {
  let component: ShopSingleComponent;
  let fixture: ComponentFixture<ShopSingleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShopSingleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShopSingleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
