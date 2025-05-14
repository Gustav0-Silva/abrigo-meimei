import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GridAdocaoAnimaisComponent } from './grid-adocao-animais.component';

describe('GridAdocaoAnimaisComponent', () => {
  let component: GridAdocaoAnimaisComponent;
  let fixture: ComponentFixture<GridAdocaoAnimaisComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GridAdocaoAnimaisComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GridAdocaoAnimaisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
