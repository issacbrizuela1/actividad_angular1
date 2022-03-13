import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FproovedoresComponent } from './fproovedores.component';

describe('FproovedoresComponent', () => {
  let component: FproovedoresComponent;
  let fixture: ComponentFixture<FproovedoresComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FproovedoresComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FproovedoresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
