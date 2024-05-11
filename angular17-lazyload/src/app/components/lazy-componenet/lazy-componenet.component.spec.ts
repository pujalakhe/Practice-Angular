import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LazyComponenetComponent } from './lazy-componenet.component';

describe('LazyComponenetComponent', () => {
  let component: LazyComponenetComponent;
  let fixture: ComponentFixture<LazyComponenetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LazyComponenetComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(LazyComponenetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
