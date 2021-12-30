import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <h1>ForRoot / For Child Pattern</h1>
    <main>
      <router-outlet></router-outlet>
      <button routerLink="/lazy">Load Lazy</button>
      <button routerLink="/">Go Home</button>
      <lib-polling></lib-polling>
    </main>
  `,
})
export class AppComponent {}
