import { Component, OnInit } from '@angular/core';
import { Project } from 'src/app/models/project';
import { PortfolioService } from 'src/app/services/portfolio.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-project',
  templateUrl: './add-project.component.html',
  styleUrls: ['./add-project.component.css']
})
export class AddProjectComponent implements OnInit {
  image: string = '';
  title: string = '';
  details: string = '';
  link: string = '';
  project_year: string = '';
  user_id: number = 1;

  constructor(private portfolioService: PortfolioService, private router: Router) { }

  ngOnInit(): void {
  }

  createProject(): void {
    const project = new Project(
      this.image,
      this.title,
      this.details,
      this.link,
      this.project_year,
      this.user_id,
    );
    this.portfolioService.saveProject(project).subscribe((data) => {
      alert('Project created successfully');
      this.router.navigate(['']);
    }, (error) => {
      alert('Error creating project: ' + error);
      this.router.navigate(['']);
    });
  }
}
