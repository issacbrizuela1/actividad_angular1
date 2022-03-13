import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuadComponent } from './menuad.component';

describe('MenuadComponent', () => {
  let component: MenuadComponent;
  let fixture: ComponentFixture<MenuadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MenuadComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MenuadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
