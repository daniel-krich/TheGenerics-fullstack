import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { SharedModule } from '../../shared/shared.module';
import { RouterModule, Routes } from '@angular/router';
import { GetLatestAlbumComponent } from './shared/get-latest-album/get-latest-album.component';
import { SharedHomeModule } from './shared/shared-home.module';
import { ToursModule } from './features/tours/tours.module';
import { routes } from './home.routes';

@NgModule({
  declarations: [
    HomeComponent
  ],
  imports: [
    RouterModule.forChild(routes),
    CommonModule,
    SharedHomeModule,
    ToursModule,
    SharedModule
  ],
  exports: [RouterModule]
})
export class HomeModule { }
