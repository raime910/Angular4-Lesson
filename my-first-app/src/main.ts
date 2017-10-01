import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

// This is the first file that is executed by Ng.

if (environment.production) {
  enableProdMode();
}

// Bootstraps/start Ng app by passing AppModule
platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.log(err));

/* main.ts
    -> app.module.ts
      -> app.component.ts
*/
