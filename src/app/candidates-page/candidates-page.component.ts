import { Component, OnInit } from '@angular/core';
import { CandidateService } from '../services/candidate.service';
import { Candidate } from 'src/models/candidate.model';
import { SearchForm } from 'src/models/search.model';

@Component({
  selector: 'app-candidates-page',
  templateUrl: './candidates-page.component.html',
  styleUrls: ['./candidates-page.component.scss'],
})
export class CandidatesPageComponent implements OnInit {
  filters: SearchForm = {
    name: '',
    position: '',
    status: '',
  };
  // Arrays
  candidates: Candidate[] = [];
  filteredCandidates: Candidate[] = [];

  constructor(private candidateService: CandidateService) {}

  ngOnInit(): void {
    this.loadCandidates();
  }

  loadCandidates() {
    this.candidateService.getCandidates().subscribe((res) => {
      this.candidates = res?.sort((first, second) =>
        first.name.toLowerCase().localeCompare(second.name.toLowerCase())
      );
      this.filteredCandidates = [...this.candidates];
    });
  }

  onSearch(filters: any) {
    this.filters = filters;
    this.applyFilters();
  }

  applyFilters() {
    this.filteredCandidates = this.candidates?.filter(
      (candidate: Candidate) => {
        return (
          (!this.filters.name ||
            candidate?.name
              .toLowerCase()
              .includes(this.filters.name.toLowerCase())) &&
          (!this.filters.position ||
            candidate?.position
              .toLowerCase()
              .includes(this.filters.position.toLowerCase())) &&
          (!this.filters.status || candidate.status === this.filters.status)
        );
      }
    );
  }
}
