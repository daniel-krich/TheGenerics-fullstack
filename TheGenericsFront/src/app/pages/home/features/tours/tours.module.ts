import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ToursComponent } from './tours.component';
import { TourComponent } from './components/tour/tour.component';
import { ToursDataService } from './services/tours-data.service';
import { SharedModule } from '../../../../shared/shared.module';
import { MatTooltipModule } from '@angular/material/tooltip';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    ToursComponent,
    TourComponent
  ],
  providers: [ToursDataService],
  imports: [
    CommonModule,
    SharedModule,
    MatTooltipModule,
    HttpClientModule
  ],
  exports: [ToursComponent]
})
export class ToursModule { }
