import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShopRateComponent } from './shop-rate.component';

describe('ShopRateComponent', () => {
  let component: ShopRateComponent;
  let fixture: ComponentFixture<ShopRateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShopRateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShopRateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
