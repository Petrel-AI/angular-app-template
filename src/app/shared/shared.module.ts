import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AlertComponent } from './components/alert/component/alert.component';
import { AuthGuard } from './guards/auth.guard';
import { AccountantGuard } from './guards/accountant.guard';
import { AdminGuard } from './guards/admin.guard';
import { ActiveUserGuard } from './guards/active-user.guard';
import { FieldErrorComponent } from './components/field-error/field-error.component';
import { ConfirmDialogComponent } from './components/dialogs/confirm-dialog/confirm-dialog.component';
import { DeclineDialogComponent } from './components/dialogs/decline-dialog/decline-dialog.component';
import { HasRoleDirective } from './directives/has-role.directive';
import { DisableControlDirective } from './directives/disabled-control.directive';
import { OnlyNumberDirective } from './directives/numbers-only.directive';
import { LatinCharactersDirective } from './directives/latin-characters.directive';
import { DateRangeValidator } from './directives/date-range.directive';
import { YearRangeValidator } from './directives/year-range.directive';
import { GoBackButtonComponent } from './components/go-back-button/go-back-button.component';
import { SubmitButtonComponent } from './components/submit-button/submit-button.component';
import { PopoverComponent } from './components/popover/popover.component';
import { NoSanitizePipe } from './directives/no-sanitize.directive';
import { IsMobileDirective } from './directives/is-mobile.directive';
import { IsDesktopDirective } from './directives/is-desktop.directive';
import { FinanceValueComponent } from './components/finance-value/finance-value.component';
import { TablePaginationComponent } from './components/table-pagination/table-pagination.component';
import { AppPageHeaderComponent } from './components/app-page-header/app-page-header.component';

const componentsToDeclareAndExport = [
  AlertComponent,
  AppPageHeaderComponent,
  FieldErrorComponent,
  ConfirmDialogComponent,
  DeclineDialogComponent,
  HasRoleDirective,
  ConfirmDialogComponent,
  DeclineDialogComponent,
  HasRoleDirective,
  DisableControlDirective,
  OnlyNumberDirective,
  LatinCharactersDirective,
  DateRangeValidator,
  YearRangeValidator,
  GoBackButtonComponent,
  SubmitButtonComponent,
  PopoverComponent,
  IsDesktopDirective,
  IsMobileDirective,
  NoSanitizePipe,
  FinanceValueComponent,
  TablePaginationComponent
];

@NgModule({
  declarations: componentsToDeclareAndExport,
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    NgbModule,
  ],
  providers: [AuthGuard, AccountantGuard, AdminGuard, ActiveUserGuard],
  exports: componentsToDeclareAndExport
})
export class SharedModule { }
