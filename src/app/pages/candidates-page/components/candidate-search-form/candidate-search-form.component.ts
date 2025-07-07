import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { SearchForm } from 'src/app/models/search.model';

@Component({
  selector: 'app-candidate-search-form',
  templateUrl: './candidate-search-form.component.html',
  styleUrls: ['./candidate-search-form.component.scss'],
})
export class CandidateSearchFormComponent implements OnInit {
  searchForm: FormGroup = new FormGroup({});
  isFormDirty = false;
  @Output() searchTriggered = new EventEmitter<any>();

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.searchForm = this.fb.group({
      name: [''],
      position: [''],
      status: [''],
    });

    this.searchForm.valueChanges.subscribe((formValue: SearchForm) => {
      this.isFormDirty = Object.values(formValue).some(
        (val) => val && val.trim() !== ''
      );
    });
  }

  onSearchClick(): void {
    this.searchTriggered.emit(this.searchForm.value);
  }

  onReset(): void {
    this.searchForm.reset();
    this.searchForm.get('status')?.setValue('');
    this.searchTriggered.emit(this.searchForm.value);
  }
}
