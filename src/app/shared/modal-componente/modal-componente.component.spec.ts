import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalComponenteComponent } from './modal-componente.component';

describe('ModalComponenteComponent', () => {
  let component: ModalComponenteComponent;
  let fixture: ComponentFixture<ModalComponenteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModalComponenteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalComponenteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
