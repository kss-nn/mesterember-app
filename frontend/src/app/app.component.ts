import { Component } from '@angular/core';
import { Subscription } from 'rxjs';
import { User } from './model/user';
import { AuthService } from './service/auth.service';
import { ConfigService } from './service/config.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'mesterember-app';

  navigation = this.config.navigation;
  loginStatus = false;
  userSub: Subscription;
  user: User | null = null;

  constructor(
    private config: ConfigService,
    private auth: AuthService,
  ) { }

  ngOnInit(): void {
    this.userSub = this.auth.currentUserSubject.subscribe(
      user => this.user = user
    );
  }

  ngOnDestroy() {
    this.userSub.unsubscribe();
  }

  onLogout() {
    this.auth.logout();
  }
}
