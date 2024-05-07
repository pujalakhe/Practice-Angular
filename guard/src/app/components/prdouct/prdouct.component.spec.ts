import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrdouctComponent } from './prdouct.component';

describe('PrdouctComponent', () => {
  let component: PrdouctComponent;
  let fixture: ComponentFixture<PrdouctComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PrdouctComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PrdouctComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
