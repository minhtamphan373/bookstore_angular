import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ImageSliderComponent } from '../imageSlider/components/imageSlider.component';

@NgModule({
  imports: [CommonModule],
  exports: [ImageSliderComponent],
  declarations: [ImageSliderComponent],
})
export class ImageSliderModule {}