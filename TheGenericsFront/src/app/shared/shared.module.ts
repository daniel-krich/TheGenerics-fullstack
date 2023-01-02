import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from './components/footer/footer.component';
import { NavigationComponent } from './components/navigation/navigation.component';
import { RouterModule } from '@angular/router';
import { DayMonthFormatterPipe } from './pipes/day-month-formatter.pipe';
import { DateCountDownFormatterPipe } from './pipes/day-count-down-formatter.pipe';
import { LoadingSpinnerComponent } from './components/loading-spinner/loading-spinner.component';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatDialogModule } from '@angular/material/dialog';
import { LoginDialogComponent } from './components/login-dialog/login-dialog.component';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { FormsModule } from '@angular/forms';
import { AuthStateService } from '../core/auth-state.service';


@NgModule({
  declarations: [
    FooterComponent,
    NavigationComponent,
    DayMonthFormatterPipe,
    DateCountDownFormatterPipe,
    LoadingSpinnerComponent,
    LoginDialogComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    MatProgressSpinnerModule,
    MatDialogModule,
    MatButtonModule,
    MatCardModule,
    MatInputModule,
    RouterModule
  ],
  providers: [],
  exports: [
    FooterComponent,
    NavigationComponent,
    DayMonthFormatterPipe,
    LoadingSpinnerComponent,
    DateCountDownFormatterPipe,
    LoginDialogComponent
  ]
})
export class SharedModule { }
