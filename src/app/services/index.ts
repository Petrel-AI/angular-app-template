import { AlertService } from '@shared/components/alert/services/alert.service';
import { AuthService } from '@shared/services/auth/auth.service';
import { AuthSessionService } from '@shared/services/auth/auth.session.service';
import { SessionStorageWrapper } from '@shared/services/session-storage-wrapper.service';
import { SpinnerService } from '@shared/services/spinners/spinner-service';
import { AuthorizationService } from './authorization.service';
import { GoogleAnalyticsService } from 'ngx-google-analytics';
import { TitleService } from './title.service';

export * from './authorization.service';
export * from './api.service';
export * from './base-api.service';


export const applicationServices = [
    SessionStorageWrapper,
    AuthService,
    AuthSessionService,
    AuthorizationService,
    SpinnerService,
    AlertService,
    GoogleAnalyticsService,
    TitleService
  ];
