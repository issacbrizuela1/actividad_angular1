import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FproductosComponent } from './fproductos.component';

describe('FproductosComponent', () => {
  let component: FproductosComponent;
  let fixture: ComponentFixture<FproductosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FproductosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FproductosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
