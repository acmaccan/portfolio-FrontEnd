import { Component, OnInit } from '@angular/core';
// import { AuthenticationService } from 'src/app/services/authentication.service';
import { PortfolioService } from 'src/app/services/portfolio.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css'],
})
export class AboutComponent implements OnInit {
  // isAdmin?: boolean = false;
  user: any;

  constructor(
    private portfolioService: PortfolioService, 
    // private authenticationService: AuthenticationService
  ) {}

  ngOnInit(): void {
    this.getAbout();
    // this.isAdmin = this.authenticationService.isAdmin();
  }

  getAbout() {
    this.portfolioService.getUserById().subscribe((data) => {
      this.user = data;
    });
  }
}
