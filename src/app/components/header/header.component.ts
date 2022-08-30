import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { PortfolioService } from 'src/app/services/portfolio.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  user: any;

  constructor(private authenticationService: AuthenticationService, private portfolioService: PortfolioService) { }

  ngOnInit(): void {
    this.portfolioService.getUserById().subscribe(data => {
      this.user = data;
    })
  }

  onLogout() {
    this.authenticationService.closeSession();
  }

}

