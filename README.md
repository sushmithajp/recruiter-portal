# TalentBridge - Recruiter Portal

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 13.2.2.
A lightweight Angular-based Candidate Management Portal that allows recruiters to search, view, and manage candidate details seamlessly.

## 🚀 Project Setup & Installation

1. **Clone the repository**

   ```bash
   `git clone https://github.com/your-username/recruiter-portal.git`
   `cd recruiter-portal`

   ```

2. **Install dependencies**
   `npm install`

3. **Run JSON Server (Mock Backend)**
   `npx json-server --watch db.json --port 3000`

4. **Run Angular Application**
   `ng serve`

Open your browser at `http://localhost:4200`

## Design Decisions

1. **Modular Component Structure**
   The app is structured into clear modules and components for better scalability:
   CandidateSearchFormComponent: Handles input and filtering logic
   CandidateListComponent: Displays results and handles pagination
   CandidatePageComponent: Acts as a container, managing communication and data flow

2. **Service-Driven Data Access**
   CandidateService abstracts HTTP communication and makes the codebase cleaner and easier to maintain.
   All candidate-related API operations are funneled through this service.

3. **Parent-Child Communication**
   The search form emits filters via @Output(), and the parent passes down candidate data via @Input().
   This makes components reusable and the architecture unidirectional and predictable.

4. **Responsive UI with Bootstrap**
   Used Bootstrap 5 for layout, responsive grid, and UI elements.
   Search, table listing, and pagination are all fully responsive.

5. **Pagination & UX Enhancements**
   Pagination is built manually for better control.

Added hover effects, badges for status, and graceful empty-state handling.

## Frontend Architecture

AppComponent
│
├── Header
├── Footer
│
└── RouterOutlet (routes to CandidatePageComponent)
│
├── CandidateSearchFormComponent ← emits filters
├── CandidateListComponent ← receives filtered candidates
└── CandidateService ← fetches candidate data
