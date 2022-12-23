import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GetLatestAlbumComponent } from './get-latest-album/get-latest-album.component';



@NgModule({
  declarations: [GetLatestAlbumComponent],
  imports: [
    CommonModule
  ],
  exports: [GetLatestAlbumComponent]
})
export class SharedHomeModule { }
