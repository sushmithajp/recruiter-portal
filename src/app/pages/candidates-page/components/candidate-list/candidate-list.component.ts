import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { Candidate } from 'src/app/models/candidate.model';

@Component({
  selector: 'app-candidate-list',
  templateUrl: './candidate-list.component.html',
  styleUrls: ['./candidate-list.component.scss'],
})
export class CandidateListComponent implements OnChanges {
  constructor() {}

  @Input() candidates: Candidate[] = [];

  pagedCandidates: Candidate[] = [];
  currentPage = 1;
  pageSize = 5;
  totalPages = 0;
  pages: number[] = [];
  tableHeaders: string[] = [
    'Name',
    'Email',
    'Position',
    'Address',
    'Phone Number',
    'Status',
  ];

  ngOnChanges(changes: SimpleChanges) {
    if (changes['candidates'] && this.candidates) {
      this.currentPage = 1;
      this.setupPagination();
    }
  }

  setupPagination() {
    if (!this.candidates || this.candidates.length === 0) {
      this.totalPages = 0;
      this.pages = [];
      this.pagedCandidates = [];
      return;
    }

    this.totalPages = Math.ceil(this.candidates.length / this.pageSize);
    this.pages = Array.from({ length: this.totalPages }, (_, i) => i + 1);
    this.goToPage(this.currentPage);
  }

  goToPage(page: number) {
    if (page < 1 || page > this.totalPages) return;
    this.currentPage = page;
    const start = (page - 1) * this.pageSize;
    const end = start + this.pageSize;
    this.pagedCandidates = this.candidates.slice(start, end);
  }
}
