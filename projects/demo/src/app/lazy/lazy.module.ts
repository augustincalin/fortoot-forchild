import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PollingModule } from 'polling';
import { LazyRoutingModule } from './lazy-routing.module';
import { LazyComponent } from './lazy.component';

@NgModule({
  declarations: [LazyComponent],
  imports: [
    CommonModule,
    LazyRoutingModule,
    PollingModule
    // PollingModule.withConfig({
    //   interval: 2000,
    // }),
  ],
})
export class LazyModule {}
