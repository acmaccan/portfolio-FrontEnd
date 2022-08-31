# Proyecto Integrador Argentina Programa

## Install Angular CLI globally

npm install -g @angular/cli

Angular CLI: 14.1.0<br/>
Node: 16.16.0<br/>
Package Manager: npm 8.14.0<br/>
OS: win32 x64

Angular:

Package                      Version<br/>
------------------------------------------------<br/>
@angular-devkit/architect    0.1401.0 (cli-only)<br/>
@angular-devkit/core         14.1.0 (cli-only)<br/>
@angular-devkit/schematics   14.1.0 (cli-only)<br/>
@schematics/angular          14.1.0 (cli-only)<br/>

## Create angular project
- ng new angular-frontend
- Angular routing
- Format stylesheet CSS

## Move static code to angular project
- html headers to index.html.<br/>
  If we install bootstrap with package includes .js and .css files in angular.json
- index body to app.component.html
- login body to login.component.html
- styles to app.component.css
- move assets
- create components and move code and styles

## Create components
- ng generate component components/header
- ng generate component components/about
- ng generate component components/experience
- ng generate component components/education
- ng generate component components/skill
- ng generate component components/project
- ng generate component components/footer
- ng generate component components/add
- ng generate component components/edition
- ng generate component components/login
- ng generate component components/portfolio

## Create portfolio service
- ng generate service services/portfolio (Add to app.module.ts: import and providers)
- Import HttpClient to portfolio service and import it to app.module.ts
- Create mock.json
- Create methods on portfolio service for each component
- Subscribe to that data from each component

## Manage Routing
- Separate login component, from portfolio
- Insert router-outlet in app.component.html
- Add paths in app-routing.module.ts

## Form
- Add FormBuilder to login constructor
- Add ReactiveFormsModule to imports in app.module.ts
- Add validations to form

## Create authentication service
- ng generate service services/authentication

## Create interceptor service
Allow us intercept http requests and add token before to hits the api.
- ng generate service services/interceptor (Add to app.module.ts: import and providers)

## Create authentication guard
- ng generate guard services/Portfolio
- CanActivate interface
- Add guard to app-routing.module.ts

## Create models
- ng generate class models/jwt
- ng generate class models/login
- ng generate class models/user
- ng generate class models/education
- ng generate class models/experience
- ng generate class models/project
- ng generate class models/role
- ng generate class models/skill

## Complete services

## Create add and edit components
- ng generate component components/experience/add-experience --skip-tests --flat
- ng generate component components/experience/edit-experience --skip-tests --flat
- ng generate component components/education/add-education --skip-tests --flat
- ng generate component components/education/edit-education --skip-tests --flat
- ng generate component components/project/add-project --skip-tests --flat
- ng generate component components/project/edit-project --skip-tests --flat
- ng generate component components/skill/add-skill --skip-tests --flat
- ng generate component components/skill/edit-skill --skip-tests --flat