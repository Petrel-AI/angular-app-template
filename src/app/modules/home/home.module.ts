import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '@shared/shared.module';
import { HomeComponent } from './components/home/home.component';
import { NotAuthorizedErrorComponent } from './components/not-authorized-error/not-authorized-error.component';
import { NotFoundErrorComponent } from './components/not-found-error/not-found-error.component';
import { MeComponent } from './components/me/me.component';
import { LoginPageComponent } from './components/login-page/login-page.component';
import { NoPermissionComponent } from './components/no-permission/no-permission.component';
import { ServerUnavailableComponent } from './components/server-unavailable/server-unavailable.component';
import { HomeRoutingModule } from './home.routing-module';
import { AuthCallbackComponent } from './components/auth-callback/auth-callback.component';



@NgModule({
  declarations: [
    HomeComponent,
    NotAuthorizedErrorComponent,
    NotFoundErrorComponent,
    MeComponent,
    LoginPageComponent,
    NoPermissionComponent,
    ServerUnavailableComponent,
    AuthCallbackComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    HomeRoutingModule
  ]
})
export class HomeModule { }
