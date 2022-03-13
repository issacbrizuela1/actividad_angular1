import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FusuariosComponent } from './fusuarios.component';

describe('FusuariosComponent', () => {
  let component: FusuariosComponent;
  let fixture: ComponentFixture<FusuariosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FusuariosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FusuariosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
