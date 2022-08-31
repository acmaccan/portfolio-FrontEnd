import { Component, OnInit } from '@angular/core';
import { Skill } from 'src/app/models/skill';
import { PortfolioService } from 'src/app/services/portfolio.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-skill',
  templateUrl: './add-skill.component.html',
  styleUrls: ['./add-skill.component.css']
})
export class AddSkillComponent implements OnInit {
  skill: string = '';
  percentage: number = 0;
  user_id: number = 1;

  constructor(private portfolioService: PortfolioService, private router: Router) { }

  ngOnInit(): void {
  }

  createSkill(): void {
    const skill = new Skill(
      this.skill,
      this.percentage,
      this.user_id,
    );
    this.portfolioService.saveSkill(skill).subscribe((data) => {
      alert('Skill created successfully');
      this.router.navigate(['']);
    }, (error) => {
      alert('Error creating skill: ' + error);
      this.router.navigate(['']);
    });
  }
}
