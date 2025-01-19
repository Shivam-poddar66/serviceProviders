import { Component } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent {
  name: string = '';
  email: string = '';
  password: string = '';
  errorMessage: string = '';

  constructor(private authService: AuthService, private router: Router) {}

  onRegister() {
    this.authService.register(this.name, this.email, this.password).subscribe(
      () => {
        this.router.navigate(['/login']);
      },
      (err) => {
        this.errorMessage = 'Registration failed!';
      }
    );
  }
  
  navigateToLogin() {
    this.router.navigate(['/login']); // Replace '/login' with your actual login route
  }

}
