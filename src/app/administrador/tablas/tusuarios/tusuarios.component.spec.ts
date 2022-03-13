import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TusuariosComponent } from './tusuarios.component';

describe('TusuariosComponent', () => {
  let component: TusuariosComponent;
  let fixture: ComponentFixture<TusuariosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TusuariosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TusuariosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
