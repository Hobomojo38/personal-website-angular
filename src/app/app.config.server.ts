import { mergeApplicationConfig, ApplicationConfig } from '@angular/core';
import { appConfig } from './app.config';

const serverConfig: ApplicationConfig = {
  providers: [
    // Add Angular providers here if needed
  ]
};

export const config = mergeApplicationConfig(appConfig, serverConfig);
