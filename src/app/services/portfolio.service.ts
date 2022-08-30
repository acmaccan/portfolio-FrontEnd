import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Experience } from '../models/experience';
import { Education } from '../models/education';
import { Project } from '../models/project';
import { Skill } from '../models/skill';

@Injectable({
  providedIn: 'root',
})
export class PortfolioService {
  url = 'http://localhost:8080/';
  // url = 'https://mighty-thicket-49246.herokuapp.com/';
  constructor(private http: HttpClient) {}

  // User
  public getUsers(): Observable<any> {
    return this.http.get<any>(this.url + 'user/get');
  }

  public getUserById(): Observable<any> {
    return this.http.get<any>(this.url + 'user/get/1');
  }

  // public getUserById(id: number): Observable<any> {
  //   return this.http.get<any>(this.url + `user/get/${id}`);
  // }

  // Experience
  public getExperiences(): Observable<any> {
    return this.http.get<Experience[]>(this.url + 'experience/get');
  }

  public getExperienceById(id: number): Observable<any> {
    return this.http.get<Experience>(this.url + `experience/get/${id}`);
  }

  public saveExperience(experience: Experience): Observable<any> {
    return this.http.post<any>(this.url + 'experience/save', experience);
  }

  public editExperience(id: number, experience: Experience): Observable<any> {
    return this.http.put<any>(this.url + `experience/edit/${id}`, experience); // revisar por param o body?
  }

  public deleteExperience(id: number): Observable<any> {
    return this.http.delete<any>(this.url + `experience/delete/${id}`);
  }

  // Education
  public getEducations(): Observable<any> {
    return this.http.get<any>(this.url + 'education/get');
  }

  public getEducationById(id: number): Observable<any> {
    return this.http.get<Education>(this.url + `education/get/${id}`);
  }

  public saveEducation(education: Education): Observable<any> {
    return this.http.post<any>(this.url + 'education/save', education);
  }

  public editEducation(id: number, education: Education): Observable<any> {
    return this.http.put<any>(this.url + `education/edit/${id}`, education);
  }

  public deleteEducation(id: number): Observable<any> {
    return this.http.delete<any>(this.url + `education/delete/${id}`);
  }

  // Skill
  public getSkills(): Observable<any> {
    return this.http.get<any>(this.url + 'skill/get');
  }

  public getSkillById(id: number): Observable<any> {
    return this.http.get<Skill>(this.url + `skill/get/${id}`);
  }

  public saveSkill(skill: Skill): Observable<any> {
    return this.http.post<any>(this.url + 'skill/save', skill);
  }

  public editSkill(id: number, skill: Skill): Observable<any> {
    return this.http.put<any>(this.url + `skill/edit/${id}`, skill); // revisar por param o body?
  }

  public deleteSkill(id: number): Observable<any> {
    return this.http.delete<any>(this.url + `skill/delete/${id}`);
  }

  // Project
  public getProjects(): Observable<any> {
    return this.http.get<any>(this.url + 'project/get');
  }

  public getProjectById(id: number): Observable<any> {
    return this.http.get<Project>(this.url + `project/get/${id}`);
  }

  public saveProject(project: Project): Observable<any> {
    return this.http.post<any>(this.url + 'project/save', project);
  }

  public editProject(id: number, project: Project): Observable<any> {
    return this.http.put<any>(this.url + `project/edit/${id}`, project); // revisar por param o body?
  }

  public deleteProject(id: number): Observable<any> {
    return this.http.delete<any>(this.url + `project/delete/${id}`);
  }
}
