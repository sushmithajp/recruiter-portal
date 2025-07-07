import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CandidateSearchFormComponent } from './candidate-search-form.component';

describe('CandidateSearchFormComponent', () => {
  let component: CandidateSearchFormComponent;
  let fixture: ComponentFixture<CandidateSearchFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CandidateSearchFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CandidateSearchFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
