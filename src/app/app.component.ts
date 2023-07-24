import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { LoadingController } from '@ionic/angular';
import { AuthService } from './services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    { title: 'Home', url: '/home', icon: 'home' },
    { title: 'About', url: '/about', icon: 'alert' },
    { title: 'Contact', url: '/contact', icon: 'call' },
    { title: 'Customer', url: '/customer', icon: 'accessibility'},
  ];
  constructor(private loadingController: LoadingController,
    private router: Router,
    private authService: AuthService) {}

    async logout() {
      try {
        await this.authService.logout();
        this.router.navigateByUrl('/loginauth'); // Navigate to login page after logout
      } catch (error) {
        console.error('Logout error:', error);
      }
    }
}
