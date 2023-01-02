import { Component } from '@angular/core';
import { AuthStateService } from './core/auth-state.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent {
    constructor(authService: AuthStateService) {
        authService.runAutoAuthentication();
    }
}
