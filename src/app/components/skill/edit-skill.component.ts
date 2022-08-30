import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Skill } from 'src/app/models/skill';
import { PortfolioService } from 'src/app/services/portfolio.service';

@Component({
  selector: 'app-edit-skill',
  templateUrl: './edit-skill.component.html',
  styleUrls: ['./edit-skill.component.css']
})
export class EditSkillComponent implements OnInit {
  skill: Skill = null;

  constructor(
    private portfolioService: PortfolioService,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
    const id = this.activatedRoute.snapshot.params['id'];
    this.portfolioService.getSkillById(id).subscribe((data) => {
      this.skill = data;
    },
    (error) => {
      alert('Error editing skill: ' + error);
      this.router.navigate(['']);
    }
  );
  }

  editSkill(): void {
    const id = this.activatedRoute.snapshot.params['id'];

    this.portfolioService.editSkill(id, this.skill).subscribe((data) => {
        this.router.navigate(['']);
      },
      (error) => {
        alert('Error editing skill: ' + error);
        this.router.navigate(['']);
      }
    );
  }
}