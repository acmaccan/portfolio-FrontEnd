import { Component, OnInit } from '@angular/core';
import { Education } from 'src/app/models/education';
import { PortfolioService } from 'src/app/services/portfolio.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-education',
  templateUrl: './add-education.component.html',
  styleUrls: ['./add-education.component.css']
})
export class AddEducationComponent implements OnInit {
  thumb: string = '';
  institution: string = '';
  title: string = '';
  details: string = '';
  from_date: string = '';
  to_date: string = '';
  user_id: number = 1;

  constructor(private portfolioService: PortfolioService, private router: Router) { }

  ngOnInit(): void {
  }

  createEducation(): void {
    const education = new Education(
      this.thumb,
      this.institution,
      this.title,
      this.details,
      this.from_date,
      this.to_date,
      this.user_id,
    );
    this.portfolioService.saveEducation(education).subscribe((data) => {
      alert('Education created successfully');
      this.router.navigate(['']);
    }, (error) => {
      alert('Error creating education: ' + error);
      this.router.navigate(['']);
    });
  }
}
