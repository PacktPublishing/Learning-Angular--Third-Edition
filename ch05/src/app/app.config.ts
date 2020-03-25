import { InjectionToken } from '@angular/core';

export interface AppConfig {
  title: string;
  version: number;
}

export const APP_CONFIG = new InjectionToken<AppConfig>('app.config');
export const appSettings: AppConfig = {
  title: 'My app',
  version: 1.0
};
