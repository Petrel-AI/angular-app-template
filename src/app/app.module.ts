import { NgModule, APP_INITIALIZER } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { SharedModule } from '@shared/shared.module';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgxSpinnerModule } from 'ngx-spinner';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { environment } from '@environments/environment';
import { applicationServices } from './services';
import { AuthInterceptor } from '@shared/interceptors/auth-interceptor';
import { SpinnerInterceptor } from '@shared/interceptors/spinner-interceptor';
import { DateParserInterceptor } from '@shared/interceptors/date-parser-interceptor';
import { OidcUserManager } from '@shared/services/auth/oidc-user-manager.service';

const appModules: any[] = [
];

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule,
    NgbModule,
    NgxSpinnerModule,
    HttpClientModule,
    ...appModules,
    ...environment.googleAnalytics.imports
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: SpinnerInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: DateParserInterceptor, multi: true },
    OidcUserManager,
    {
      provide: APP_INITIALIZER,
      useFactory: (oidcManager: OidcUserManager) => () => oidcManager.initiateUserManager(),
      deps: [OidcUserManager],
      multi: true
    },
    ...applicationServices
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
