import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VerFormulariosComponent } from './ver-formularios.component';

describe('VerFormulariosComponent', () => {
  let component: VerFormulariosComponent;
  let fixture: ComponentFixture<VerFormulariosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [VerFormulariosComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VerFormulariosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
