import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TproductosComponent } from './tproductos.component';

describe('TproductosComponent', () => {
  let component: TproductosComponent;
  let fixture: ComponentFixture<TproductosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TproductosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TproductosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
