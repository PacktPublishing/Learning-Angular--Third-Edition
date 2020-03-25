import { Component, Inject } from '@angular/core';
import { APP_CONFIG, appSettings, AppConfig } from './app.config';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [{
    provide: APP_CONFIG,
    useValue: appSettings
  }]
})
export class AppComponent {
  title: string;
  version: number;

  constructor(@Inject(APP_CONFIG) config: AppConfig) {
    this.title = config.title;
    this.version = config.version;
  }
}
