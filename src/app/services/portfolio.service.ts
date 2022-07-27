import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

// Injectable decorator allows services to be consumed by components
@Injectable({
  providedIn: 'root'
})
export class PortfolioService {

  url = 'http://localhost:8080/';
  // url = 'https://mighty-thicket-49246.herokuapp.com/';
  constructor(private http: HttpClient) { 
    // console.log('Portfolio service is running');
  }

  getUserData(): Observable<any> {
    // return this.http.get('../../assets/data/mock-data.json');
    return this.http.get<any>(this.url+'user/get/1');
  }

  getExperienceData(): Observable<any> {
    return this.http.get<any>(this.url+'experience/get');
  }

  getEducationData(): Observable<any> {
    return this.http.get<any>(this.url+'education/get');
  }
  
  getSkillData(): Observable<any> {
    return this.http.get<any>(this.url+'skill/get');
  }

  getProjectData(): Observable<any> {
    return this.http.get<any>(this.url+'project/get');
  }

}
