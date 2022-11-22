import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EdicaoProfissionalComponent } from './edicao-profissional.component';

describe('EdicaoProfissionalComponent', () => {
  let component: EdicaoProfissionalComponent;
  let fixture: ComponentFixture<EdicaoProfissionalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EdicaoProfissionalComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EdicaoProfissionalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
