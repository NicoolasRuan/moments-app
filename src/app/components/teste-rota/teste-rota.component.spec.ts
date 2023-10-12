import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TesteRotaComponent } from './teste-rota.component';

describe('TesteRotaComponent', () => {
  let component: TesteRotaComponent;
  let fixture: ComponentFixture<TesteRotaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TesteRotaComponent]
    });
    fixture = TestBed.createComponent(TesteRotaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
