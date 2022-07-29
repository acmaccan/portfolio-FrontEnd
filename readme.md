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
ng new angular-frontend<br/>
Angular routing<br/>
Format stylesheet CSS

## Move static code to angular project
- html headers to index.html.<br/>
  If we install bootstrap with package includes .js and .css files in angular.json
- index body to app.component.html
- login body to login.component.html
- styles to app.component.css
- move assets
- create components and move code
## Create components
- ng generate component components/header
- ng generate component components/about
- ng generate component components/experience
- ng generate component components/education
- ng generate component components/skill
- ng generate component components/project
- ng generate component components/footer

## Create portfolio service
- ng generate service services/portfolio (Add to app.module.ts: import and providers)
- Import HttpClient to portfolio service and import it to app.module.ts
- Create mock.json
- Create methods on portfolio service for each component
- Subscribe to that data from each component