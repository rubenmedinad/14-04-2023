import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BicicletaFormularioComponent } from './bicicleta-formulario.component';

describe('BicicletaFormularioComponent', () => {
  let component: BicicletaFormularioComponent;
  let fixture: ComponentFixture<BicicletaFormularioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BicicletaFormularioComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BicicletaFormularioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
