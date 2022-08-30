import { Component, OnInit } from '@angular/core';
import { Skill } from 'src/app/models/skill';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { PortfolioService } from 'src/app/services/portfolio.service';

@Component({
  selector: 'app-skill',
  templateUrl: './skill.component.html',
  styleUrls: ['./skill.component.css']
})
export class SkillComponent implements OnInit {
  isAdmin?: boolean = false;
  skills: Skill[] = [];

  constructor(private portfolioService: PortfolioService, private authenticationService: AuthenticationService) { }

  ngOnInit(): void {
    this.getSkills();
    this.isAdmin = this.authenticationService.isAdmin();
  }

  getSkills() {
    this.portfolioService.getSkills().subscribe(data => {
      this.skills = data;
    })
  }

  deleteSkill(id: number): void {
    if(id !== undefined) {
      this.portfolioService.deleteSkill(id).subscribe((data) => {
        this.getSkills();
      }, (error) => {
        alert('Error deleting skill: ' + error);
      });
    }
  }
}
