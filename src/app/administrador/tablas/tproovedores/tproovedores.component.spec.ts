import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TproovedoresComponent } from './tproovedores.component';

describe('TproovedoresComponent', () => {
  let component: TproovedoresComponent;
  let fixture: ComponentFixture<TproovedoresComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TproovedoresComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TproovedoresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
