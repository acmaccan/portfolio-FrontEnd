import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Experience } from 'src/app/models/experience';
import { PortfolioService } from 'src/app/services/portfolio.service';

@Component({
  selector: 'app-edit-experience',
  templateUrl: './edit-experience.component.html',
  styleUrls: ['./edit-experience.component.css'],
})
export class EditExperienceComponent implements OnInit {
  experience: Experience = null;

  constructor(
    private portfolioService: PortfolioService,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    const id = this.activatedRoute.snapshot.params['id'];
    this.portfolioService.getExperienceById(id).subscribe((data) => {
      this.experience = data;
    },
    (error) => {
      alert('Error editing experience: ' + error);
      this.router.navigate(['']);
    }
  );
  }

  editExperience(): void {
    const id = this.activatedRoute.snapshot.params['id'];

    this.portfolioService.editExperience(id, this.experience).subscribe((data) => {
        this.router.navigate(['']);
      },
      (error) => {
        alert('Error editing experience: ' + error);
        this.router.navigate(['']);
      }
    );
  }
}
