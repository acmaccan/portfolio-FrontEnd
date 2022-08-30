import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { AboutComponent } from './components/about/about.component';
import { ExperienceComponent } from './components/experience/experience.component';
import { EducationComponent } from './components/education/education.component';
import { SkillComponent } from './components/skill/skill.component';
import { ProjectComponent } from './components/project/project.component';
import { FooterComponent } from './components/footer/footer.component';
import { PortfolioService } from './services/portfolio.service';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { EditionComponent } from './components/edition/edition.component';
import { LoginComponent } from './components/login/login.component';
import { PortfolioComponent } from './components/portfolio/portfolio.component';
import { ReactiveFormsModule } from '@angular/forms';
import { AuthenticationService } from './services/authentication.service';
import { InterceptorService } from './services/interceptor.service';
import { AddComponent } from './components/add/add.component';
import { AddExperienceComponent } from './components/experience/add-experience.component';
import { EditExperienceComponent } from './components/experience/edit-experience.component';
import { AddEducationComponent } from './components/education/add-education.component';
import { EditEducationComponent } from './components/education/edit-education.component';
import { AddProjectComponent } from './components/project/add-project.component';
import { EditProjectComponent } from './components/project/edit-project.component';
import { AddSkillComponent } from './components/skill/add-skill.component';
import { EditSkillComponent } from './components/skill/edit-skill.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    AboutComponent,
    ExperienceComponent,
    EducationComponent,
    SkillComponent,
    ProjectComponent,
    FooterComponent,
    EditionComponent,
    LoginComponent,
    PortfolioComponent,
    AddComponent,
    AddExperienceComponent,
    EditExperienceComponent,
    AddEducationComponent,
    EditEducationComponent,
    AddProjectComponent,
    EditProjectComponent,
    AddSkillComponent,
    EditSkillComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [PortfolioService,
    { provide: HTTP_INTERCEPTORS, useClass: InterceptorService, multi: true }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
