import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from 'src/app/services/authentication.service';

@Component({
  selector: 'app-edition',
  templateUrl: './edition.component.html',
  styleUrls: ['./edition.component.css'],
})
export class EditionComponent implements OnInit {
  isAdmin?: boolean = false;

  constructor(private authenticationService: AuthenticationService) {}

  ngOnInit(): void {
    this.isAdmin = this.authenticationService.isAdmin();
  }
}
