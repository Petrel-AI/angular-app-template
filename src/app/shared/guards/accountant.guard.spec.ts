import { TestBed } from '@angular/core/testing';
import { AccountantGuard } from './accountant.guard';
import { Router, RouterModule } from '@angular/router';
import { OidcUserManager } from '@shared/services/auth/oidc-user-manager.service';
import { AuthorizationService } from '@services/authorization.service';
import { UserRole } from '@models/enums';
import { testUtilStubs, spyOnCurrentUserServiceWithUser, mostUsedServices } from '@shared/test-utils';
import { TestApplicationUser } from '@shared/test-utils/models';
import { ApplicationUserExtended } from '@models/extended';

describe('AccountantGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [RouterModule.forRoot([])],
      providers: [AccountantGuard, ...testUtilStubs, ...mostUsedServices, OidcUserManager, AuthorizationService]
    });
  });

  it('should return true for Accountant', () => {
    const manager = new ApplicationUserExtended(new TestApplicationUser(UserRole.Accountant));

    const guard = new AccountantGuard(TestBed.inject(Router), spyOnCurrentUserServiceWithUser(manager, spyOn));
    guard.canActivate(null, null).subscribe(canActivate => {
      expect(canActivate).toEqual(true);
    });
  });

  it('should return false for Admin', () => {
    const manager = new ApplicationUserExtended(new TestApplicationUser(UserRole.Admin));

    const guard = new AccountantGuard(TestBed.inject(Router), spyOnCurrentUserServiceWithUser(manager, spyOn));
    guard.canActivate(null, null).subscribe(canActivate => {
      expect(canActivate).toEqual(false);
    });
  });

  it('should return false for Employee', () => {
    const manager = new ApplicationUserExtended(new TestApplicationUser(UserRole.TaxPayer));

    const guard = new AccountantGuard(TestBed.inject(Router), spyOnCurrentUserServiceWithUser(manager, spyOn));
    guard.canActivate(null, null).subscribe(canActivate => {
      expect(canActivate).toEqual(false);
    });
  });
});
