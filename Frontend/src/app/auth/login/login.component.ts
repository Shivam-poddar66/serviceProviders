import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  email: string = '';
  password: string = '';
  errorMessage: string = '';

  constructor(private authService: AuthService, private router: Router) {}

  onLogin() {
    this.authService.login(this.email, this.password).subscribe(
      (res: any) => {
        localStorage.setItem('token', res.token);
        this.router.navigate(['/business']);
      },
      (err) => {
        this.errorMessage = 'Invalid credentials!';
      }
    );
  }

  navigateToRegister() {
    this.router.navigate(['/register']); // Replace '/register' with the actual registration page route
  }
  
}
