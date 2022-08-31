import { Component, OnInit } from '@angular/core';
import { Project } from 'src/app/models/project';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { PortfolioService } from 'src/app/services/portfolio.service';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.css']
})
export class ProjectComponent implements OnInit {
  isAdmin?: boolean = false;
  projects: Project[] = [];

  constructor(private portfolioService: PortfolioService, private authenticationService: AuthenticationService) { }

  ngOnInit(): void {
    this.getProjects();
    this.isAdmin = this.authenticationService.isAdmin();
  }

  getProjects() {
    this.portfolioService.getProjects().subscribe(data => {
      this.projects = data;
    })
  }

  deleteProject(id: number): void {
    if(id !== undefined) {
      this.portfolioService.deleteProject(id).subscribe((data) => {
        this.getProjects();
      }, (error) => {
        alert('Error deleting project: ' + error);
      });
    }
  }
}
