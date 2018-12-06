import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BuylistComponent } from './buylist.component';

describe('BuylistComponent', () => {
  let component: BuylistComponent;
  let fixture: ComponentFixture<BuylistComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BuylistComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BuylistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
