import { NgxGoogleAnalyticsModule, NgxGoogleAnalyticsRouterModule } from 'ngx-google-analytics';

export const environment = {
  production: true,
  staging: false,
  type: 'prod',
  baseUrl: '',
  resourceApiURI: 'https://api.taxer.petrelai.kz',
  identityApiURI: 'https://identity.taxer.petrelai.kz',
  name: '',
  auth: {
    authority: 'https://identity.taxer.petrelai.kz',
    client_id: 'core_spa',
    redirect_uri: 'https://taxer.petrelai.kz/auth-callback',
    post_logout_redirect_uri: 'https://taxer.petrelai.kz/',
    response_type: 'id_token token',
    scope: 'openid profile email core.api',
    filterProtocolClaims: true,
    loadUserInfo: true,
    automaticSilentRenew: true,
    silent_redirect_uri: 'https://taxer.petrelai.kz/silent-refresh.html'
  },
  googleAnalytics: {
    imports: [NgxGoogleAnalyticsModule.forRoot(''), NgxGoogleAnalyticsRouterModule]
  }
};
