import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CaballeroComponent } from './caballero.component';

describe('CaballeroComponent', () => {
  let component: CaballeroComponent;
  let fixture: ComponentFixture<CaballeroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CaballeroComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CaballeroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
