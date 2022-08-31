import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from 'src/app/services/authentication.service';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {
  isAdmin?: boolean = false;

  constructor(private authenticationService: AuthenticationService) {}

  ngOnInit(): void {
    this.isAdmin = this.authenticationService.isAdmin();
  }

}
