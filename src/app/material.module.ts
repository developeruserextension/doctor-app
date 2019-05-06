import {
  MatAutocompleteModule,
  MatFormFieldModule,
  MatInputModule,
  MatIconModule,
  MatSlideToggleModule,
  MatTooltipModule,
  MatBadgeModule } from '@angular/material';
import { NgModule } from '@angular/core';

@NgModule({
  exports: [
    MatAutocompleteModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    MatSlideToggleModule,
    MatTooltipModule,
    MatBadgeModule

  ]

})

export class MaterialModule {}
