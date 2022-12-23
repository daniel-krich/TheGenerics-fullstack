import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from './components/footer/footer.component';
import { NavigationComponent } from './components/navigation/navigation.component';
import { RouterModule } from '@angular/router';
import { DayMonthFormatterPipe } from './pipes/day-month-formatter.pipe';
import { DateCountDownFormatterPipe } from './pipes/day-count-down-formatter.pipe';
import { LoadingSpinnerComponent } from './components/loading-spinner/loading-spinner.component';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';


@NgModule({
  declarations: [
    FooterComponent,
    NavigationComponent,
    DayMonthFormatterPipe,
    DateCountDownFormatterPipe,
    LoadingSpinnerComponent
  ],
  imports: [
    CommonModule,
    MatProgressSpinnerModule,
    RouterModule
  ],
  exports: [
    FooterComponent,
    NavigationComponent,
    DayMonthFormatterPipe,
    LoadingSpinnerComponent,
    DateCountDownFormatterPipe
  ]
})
export class SharedModule { }
