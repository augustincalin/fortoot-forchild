import { Inject, Injectable, InjectionToken, Optional } from '@angular/core';
import { timer } from 'rxjs';
import { shareReplay } from 'rxjs/operators';

export interface PollingConfig {
  interval: number;
}

export const INTERVAL = new InjectionToken<PollingConfig>('interval');

@Injectable(
  // {
  //   providedIn: 'root'
  // }
)
export class PollingService {

  constructor(@Optional() @Inject(INTERVAL) private config: PollingConfig) { }

  public polling$ = timer(0, this.config?.interval || 500).pipe(shareReplay());
}
