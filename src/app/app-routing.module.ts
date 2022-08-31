import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PortfolioComponent } from './components/portfolio/portfolio.component';
import { LoginComponent } from './components/login/login.component';
import { PortfolioGuard } from './services/portfolio.guard';
import { AddExperienceComponent } from './components/experience/add-experience.component';
import { EditExperienceComponent } from './components/experience/edit-experience.component';
import { AddEducationComponent } from './components/education/add-education.component';
import { EditEducationComponent } from './components/education/edit-education.component';
import { AddProjectComponent } from './components/project/add-project.component';
import { EditProjectComponent } from './components/project/edit-project.component';
import { AddSkillComponent } from './components/skill/add-skill.component';
import { EditSkillComponent } from './components/skill/edit-skill.component';

const routes: Routes = [
  { path: 'portfolio', component: PortfolioComponent, canActivate: [PortfolioGuard] },
  { path: 'login', component: LoginComponent },
  { path: 'add-experience', component: AddExperienceComponent },
  { path: 'edit-experience/:id', component: EditExperienceComponent },
  { path: 'add-education', component: AddEducationComponent },
  { path: 'edit-education/:id', component: EditEducationComponent },
  { path: 'add-project', component: AddProjectComponent },
  { path: 'edit-project/:id', component: EditProjectComponent },
  { path: 'add-skill', component: AddSkillComponent },
  { path: 'edit-skill/:id', component: EditSkillComponent },
  { path: '', redirectTo: 'portfolio', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
