import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SimilarityComponent } from './similarity.component';

describe('SimilarityComponent', () => {
  let component: SimilarityComponent;
  let fixture: ComponentFixture<SimilarityComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SimilarityComponent]
    });
    fixture = TestBed.createComponent(SimilarityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
