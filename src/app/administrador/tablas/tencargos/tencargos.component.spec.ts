import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TencargosComponent } from './tencargos.component';

describe('TencargosComponent', () => {
  let component: TencargosComponent;
  let fixture: ComponentFixture<TencargosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TencargosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TencargosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
