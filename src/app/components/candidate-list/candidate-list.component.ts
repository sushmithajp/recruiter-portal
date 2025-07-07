import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CandidateService } from 'src/app/services/candidate.service';
import { Candidate } from 'src/models/candidate.model';

@Component({
  selector: 'app-candidate-list',
  templateUrl: './candidate-list.component.html',
  styleUrls: ['./candidate-list.component.scss'],
})
export class CandidateListComponent implements OnInit {
  candidates: Candidate[] = [];

  constructor(
    private candidateService: CandidateService,
    private router: Router
  ) {}

  ngOnInit() {
    this.loadCandidates();
  }

  loadCandidates() {
    this.candidateService.getCandidates().subscribe((res) => {
      this.candidates = res;
      this.filteredCandidates = res;
    });
  }

  edit(id: number) {
    this.router.navigate(['/candidates', id]);
  }

  delete(id: number) {
    this.candidateService
      .deleteCandidate(id)
      .subscribe(() => this.loadCandidates());
  }

  addNew() {
    this.router.navigate(['/candidates/new']);
  }

  @Input() filters: any;

  filteredCandidates: Candidate[] = [];

  ngOnChanges() {
    if (this.filters && this.candidates.length) {
      this.applyFilters();
    }
  }

  applyFilters() {
    this.filteredCandidates = this.candidates.filter((candidate) => {
      return (
        (!this.filters.name ||
          candidate['name']
            .toLowerCase()
            .includes(this.filters.name.toLowerCase())) &&
        (!this.filters.email ||
          candidate.email
            .toLowerCase()
            .includes(this.filters.email.toLowerCase())) &&
        (!this.filters.position ||
          candidate.position
            .toLowerCase()
            .includes(this.filters.position.toLowerCase())) &&
        (!this.filters.status || candidate.status === this.filters.status)
      );
    });
    console.log('Filtered candidates ', this.filteredCandidates);
  }
}
