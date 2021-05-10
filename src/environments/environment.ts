export const environment = {
  production: false,
  staging: false,
  type: 'dev',
  baseUrl: '',
  resourceApiURI: 'https://localhost:5001',
  identityApiURI: 'https://localhost:5005',
  name: 'dev',
  auth: {
    authority: 'https://localhost:5005',
    client_id: 'core_spa',
    redirect_uri: 'http://localhost:4200/auth-callback',
    post_logout_redirect_uri: 'http://localhost:4200/',
    response_type: 'id_token token',
    scope: 'openid profile email core.api',
    filterProtocolClaims: true,
    loadUserInfo: true,
    automaticSilentRenew: true,
    silent_redirect_uri: 'http://localhost:4200/silent-refresh.html'
  },
  googleAnalytics: {
    imports: []
  }
};
