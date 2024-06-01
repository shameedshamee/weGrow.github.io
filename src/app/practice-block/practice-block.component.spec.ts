import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PracticeBlockComponent } from './practice-block.component';

describe('PracticeBlockComponent', () => {
  let component: PracticeBlockComponent;
  let fixture: ComponentFixture<PracticeBlockComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PracticeBlockComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PracticeBlockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
