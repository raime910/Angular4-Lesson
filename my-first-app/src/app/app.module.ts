import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {BrowserModule} from '@angular/platform-browser';

import {SuccessAlertComponent} from './alerts/success/success.component';
import {WarningAlertComponent} from './alerts/warning/warning.component';
import {AppComponent} from './app.component';
import {ServerComponent} from './server/server.component';
import {ServersComponent} from './servers/servers.component';
import {LoginComponent} from './login/login.component';
import {ToggleComponent} from './toggle/toggle.component';

// rma - this is where we unlock features in our angular app.

@NgModule({
  declarations: [
    AppComponent,
    ServerComponent,
    ServersComponent,
    // alerts
    SuccessAlertComponent,
    WarningAlertComponent,
    LoginComponent,
    ToggleComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
