import { Subject, of, Observable } from 'rxjs';
import { IAuthService } from '../services/auth/auth.service';
import { ApplicationUserExtended } from '@models/extended';

export class MockAuthService implements IAuthService {
  public readonly loggedOutInvoked$: Subject<void> = new Subject();
  public readonly loggedIn$: Subject<void> = new Subject();
  public readonly loggedOut$: Subject<void> = new Subject();

  isAuthenticated(): boolean {
    return false;
  }

  getAuthorizationHeaderValue(): string {
    return '';
  }

  async completeAuthentication(): Promise<void> {}

  getCurrentUser(): Observable<ApplicationUserExtended | null> {
    return of(null);
  }

  login(): Promise<void> {
    throw new Error('Method not implemented.');
  }

  signout(): void {
    throw new Error('Method not implemented.');
  }
}
