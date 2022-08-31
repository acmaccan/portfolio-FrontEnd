import { Component, OnInit } from '@angular/core';
import { Experience } from 'src/app/models/experience';
import { PortfolioService } from 'src/app/services/portfolio.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-experience',
  templateUrl: './add-experience.component.html',
  styleUrls: ['./add-experience.component.css'],
})
export class AddExperienceComponent implements OnInit {
  thumb: string = '';
  company: string = '';
  from_date: string = '';
  to_date: string = '';
  title: string = '';
  details: string = '';
  type_id: number = 1;
  user_id: number = 1;

  constructor(private portfolioService: PortfolioService, private router: Router) {}

  ngOnInit(): void {
  }

  createExperience(): void {
    const experience = new Experience(
      this.thumb,
      this.company,
      this.from_date,
      this.to_date,
      this.title,
      this.details,
      this.type_id,
      this.user_id,
    );
    this.portfolioService.saveExperience(experience).subscribe((data) => {
      alert('Experience created successfully');
      this.router.navigate(['']);
    }, (error) => {
      alert('Error creating experience: ' + error);
      this.router.navigate(['']);
    });
  }
}
