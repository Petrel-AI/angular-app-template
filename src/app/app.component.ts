import { Component, OnInit, OnDestroy } from '@angular/core';
import { AuthService } from '@shared/services/auth/auth.service';
import { untilDestroyed } from '@shared/subscriptions/until-destroyed';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, OnDestroy {
  isAuthenticated = false;
  title = 'Petrel.Taxer';

  timer = 'timer';
  transparent = 'transparent';

  constructor(private readonly authService: AuthService) {}

  ngOnInit(): void {
    this.authService
      .getCurrentUser()
      .pipe(untilDestroyed(this))
      .subscribe(user => {
        if (user != null) {
          this.isAuthenticated = true;
        }
      });
  }

  ngOnDestroy(): void {}
}
