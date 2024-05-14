import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NonLazyComponenetComponent } from './non-lazy-componenet.component';

describe('NonLazyComponenetComponent', () => {
  let component: NonLazyComponenetComponent;
  let fixture: ComponentFixture<NonLazyComponenetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NonLazyComponenetComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(NonLazyComponenetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
