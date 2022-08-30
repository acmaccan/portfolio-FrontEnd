import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Project } from 'src/app/models/project';
import { PortfolioService } from 'src/app/services/portfolio.service';

@Component({
  selector: 'app-edit-project',
  templateUrl: './edit-project.component.html',
  styleUrls: ['./edit-project.component.css']
})
export class EditProjectComponent implements OnInit {
  project: Project = null;

  constructor(
    private portfolioService: PortfolioService,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
    const id = this.activatedRoute.snapshot.params['id'];
    this.portfolioService.getProjectById(id).subscribe((data) => {
      this.project = data;
    },
    (error) => {
      alert('Error editing project: ' + error);
      this.router.navigate(['']);
    }
  );
  }

  editProject(): void {
    const id = this.activatedRoute.snapshot.params['id'];

    this.portfolioService.editProject(id, this.project).subscribe((data) => {
        this.router.navigate(['']);
      },
      (error) => {
        alert('Error editing project: ' + error);
        this.router.navigate(['']);
      }
    );
  }
}