import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TudoCardComponent } from './tudo-card.component';

describe('TudoCardComponent', () => {
  let component: TudoCardComponent;
  let fixture: ComponentFixture<TudoCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TudoCardComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TudoCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
