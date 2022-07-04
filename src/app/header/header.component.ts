import { Component, Input } from '@angular/core';
import { MatSlideToggleChange } from '@angular/material/slide-toggle';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { ProfileComponent } from '../profile/profile.component';
import { AuthService } from '../services/auth.service';
import { UsersService } from '../services/users.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  user$ = this.usersService.currentUserProfile$;
  @Input()
  disableRipple!: true;
  isChecked: boolean = false;
  mode: string = 'brightness_5';
  modename: string = 'LightMode';
  title = 'dark-mode';

  changed(event: MatSlideToggleChange): void {
    this.mode = event.checked ? 'brightness_3' : 'brightness_5';
    this.modename = event.checked ? 'DarkMode' : 'LightMode';
    document.body.classList.toggle('darkMode');
  }

  constructor(
    private authService: AuthService,
    public usersService: UsersService,
    private router: Router
  ) { }

  logout() {
    this.authService.logout().subscribe(() => {
      this.router.navigate(['/']);
    });
  }

}
