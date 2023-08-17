import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  loginForm: FormGroup;
  errorMessage: string;

  constructor(private fb: FormBuilder, private router: Router) {}

  ngOnInit() {
    this.loginForm = this.fb.group(
      {
        email: [null],
        password: [null]
      }
    )
  }

  login() {
    const login = this.loginForm.value;
    if (login.email === 'test@gmail.com' && login.password === '123') {
      this.router.navigate(['./client']);
    } else {
      this.errorMessage = 'wrong credentials';
    }
  }
}
