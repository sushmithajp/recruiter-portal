# TalentBridge - Recruiter Portal

This project was generated using Angular CLI version 13.2.2.

TalentBridge – Recruiter Portal is a lightweight, Angular-powered application designed to help recruiters efficiently search, view, and manage candidate details with ease and clarity.

## Prerequisites
Make sure you have the following installed on your machine:
1.  Node.js (v16 or later recommended) –[ Download Node.js](https://nodejs.org/en)
2.  npm – comes with Node.js
3.  Angular CLI – install globally using:

```bash
npm install -g @angular/cli

```

4.  json-server – for running the mock API server:
```bash
npm install -g json-server

```

-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
## 🚀 Project Setup & Installation

1. **Clone the repository**

   ```bash
   git clone https://github.com/your-username/recruiter-portal.git
   cd recruiter-portal

   ```

2. **Install dependencies**
   `npm install`

3. **Run JSON Server (Mock Backend)**
   `npx json-server --watch db.json --port 3000`

4. **Run Angular Application**
   `ng serve`

Open your browser at `http://localhost:4200`

-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

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

-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

## Frontend Architecture

