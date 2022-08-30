import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
// import { tap } from 'rxjs';
import { AuthenticationService } from '../../services/authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;

  constructor(private formBuilder: FormBuilder, private authenticationService: AuthenticationService, private router: Router) {
    this.loginForm = this.formBuilder.group({
      email: ['', Validators.required, Validators.email],
      password: ['', Validators.required]
    });
  }

  ngOnInit(): void {
  }

  get Email() {
    return this.loginForm.get('email');
  }

  get Password() {
    return this.loginForm.get('password');
  }

  onSubmit(event: Event) {
    event.preventDefault();
    this.authenticationService.initSession(this.loginForm.value).subscribe(() => {
      // console.log('Data: ' + JSON.stringify(data));
      this.router.navigate(['/portfolio']);
      // tap(data => console.log('Data: ' + JSON.stringify(data)));
    })
  }

}
