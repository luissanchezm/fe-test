import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { CarouselModule } from 'ngx-bootstrap/carousel';
import { ModalModule } from 'ngx-bootstrap/modal';
import { ProgressbarModule } from 'ngx-bootstrap/progressbar';
import { GameDetailsModalComponent } from './game-details-modal/game-details-modal.component';
import { StoreDetailComponent } from './store-detail/store-detail.component';
import { StoreListComponent } from './store-list/store-list.component';

const components = [
  StoreListComponent,
  StoreDetailComponent,
  GameDetailsModalComponent
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    CarouselModule,
    ModalModule,
    ProgressbarModule
  ],
  declarations: components,
  exports: components,
})
export class ComponentsModule {}
