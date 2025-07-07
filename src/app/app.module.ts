import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CandidateListComponent } from './candidates-page/components/candidate-list/candidate-list.component';

import { CandidateSearchFormComponent } from './candidates-page/components/candidate-search-form/candidate-search-form.component';
import { ReactiveFormsModule } from '@angular/forms';
import { CandidatesPageComponent } from './candidates-page/candidates-page.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    CandidateListComponent,
    CandidateSearchFormComponent,
    CandidatesPageComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
