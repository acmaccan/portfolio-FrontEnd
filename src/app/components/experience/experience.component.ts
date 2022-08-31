import { Component, OnInit } from '@angular/core';
import { Experience } from 'src/app/models/experience';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { PortfolioService } from 'src/app/services/portfolio.service';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.css'],
})
export class ExperienceComponent implements OnInit {
  isAdmin?: boolean = false;
  experiences: Experience[] = [];

  constructor(private portfolioService: PortfolioService, private authenticationService: AuthenticationService) {}

  ngOnInit(): void {
    this.getExperiences();
    this.isAdmin = this.authenticationService.isAdmin();
  }

  getExperiences(): void {
    this.portfolioService.getExperiences().subscribe((data) => {
      this.experiences = data;
    });
  }

  deleteExperience(id: number): void {
    if(id !== undefined) {
      this.portfolioService.deleteExperience(id).subscribe((data) => {
        this.getExperiences();
      }, (error) => {
        alert('Error deleting experience: ' + error);
      });
    }
  }
}
