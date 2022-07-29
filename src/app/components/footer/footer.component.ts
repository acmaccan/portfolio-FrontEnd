import { Component, OnInit } from '@angular/core';
import { PortfolioService } from 'src/app/services/portfolio.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
  user: any;
  year: number = new Date().getFullYear();

  constructor(public portfolioService: PortfolioService) { }

  ngOnInit(): void {
    this.portfolioService.getUserData().subscribe(data => {
      console.log("Header component: ", data); // We recieve the complete object on the console
      this.user = data; // We recieve the data and store it in a variable
    })

    this.year = new Date().getFullYear();
  }

}
