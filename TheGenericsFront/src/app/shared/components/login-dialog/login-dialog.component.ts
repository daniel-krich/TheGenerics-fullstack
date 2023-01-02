import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { EMPTY, Observable } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
import { AuthStateService } from 'src/app/core/auth-state.service';

@Component({
  selector: 'app-login-dialog',
  templateUrl: './login-dialog.component.html',
  styleUrls: ['./login-dialog.component.scss']
})
export class LoginDialogComponent {
    public username: string = '';
    public password: string = '';
    constructor(public dialogRef: MatDialogRef<LoginDialogComponent>, private authService: AuthStateService) {}

    public login(): void {
        this.authService.tryAuthentication(this.username, this.password).subscribe(x => {
            if(!x.error)
                this.dialogRef.close();
        });
    }
}
