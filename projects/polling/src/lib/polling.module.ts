import { INTERVAL, PollingConfig, PollingService } from './polling.service';
import { ModuleWithProviders, NgModule } from '@angular/core';
import { PollingComponent } from './polling.component';

@NgModule({
  declarations: [PollingComponent],
  imports: [],
  exports: [PollingComponent],
  providers: [PollingService]
})
export class PollingModule {
  static withConfig(config?: PollingConfig): ModuleWithProviders<PollingModule> {
    return {
      ngModule: PollingModule,
      providers: [
        PollingService,
        {
          provide: INTERVAL,
          useValue: config || { interval: 1000 },
        },
      ],
    };
  }

  static forRoot(): ModuleWithProviders<PollingModule>{
    return{
      ngModule: PollingModule,
      providers: [PollingService]
    }
  }
}
