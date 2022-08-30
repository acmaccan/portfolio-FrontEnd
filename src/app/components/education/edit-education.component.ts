import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Education } from 'src/app/models/education';
import { PortfolioService } from 'src/app/services/portfolio.service';

@Component({
  selector: 'app-edit-education',
  templateUrl: './edit-education.component.html',
  styleUrls: ['./edit-education.component.css']
})
export class EditEducationComponent implements OnInit {
  education: Education = null;

  constructor(
    private portfolioService: PortfolioService,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
    const id = this.activatedRoute.snapshot.params['id'];
    this.portfolioService.getEducationById(id).subscribe((data) => {
      this.education = data;
    },
    (error) => {
      alert('Error editing education: ' + error);
      this.router.navigate(['']);
    }
  );
  }

  editEducation(): void {
    const id = this.activatedRoute.snapshot.params['id'];

    this.portfolioService.editEducation(id, this.education).subscribe((data) => {
        this.router.navigate(['']);
      },
      (error) => {
        alert('Error editing education: ' + error);
        this.router.navigate(['']);
      }
    );
  }
}
