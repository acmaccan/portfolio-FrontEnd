import { Component, OnInit } from '@angular/core';
import { Education } from 'src/app/models/education';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { PortfolioService } from 'src/app/services/portfolio.service';

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.css'],
})
export class EducationComponent implements OnInit {
  isAdmin?: boolean = false;
  educations: any;

  constructor(private portfolioService: PortfolioService, private authenticationService: AuthenticationService) {}

  ngOnInit(): void {
    this.getEducations();
    this.isAdmin = this.authenticationService.isAdmin();
  }

  getEducations() {
    this.portfolioService.getEducations().subscribe((data) => {
      this.educations = data;
    });
  }

  deleteEducation(id: number): void {
    if(id !== undefined) {
      this.portfolioService.deleteEducation(id).subscribe((data) => {
        this.getEducations();
      }, (error) => {
        alert('Error deleting education: ' + error);
      });
    }
  }
}
