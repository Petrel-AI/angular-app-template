export const environment = {
  production: false,
  staging: true,
  type: 'staging',
  baseUrl: '',
  resourceApiURI: 'https://qa.api.taxer.petrelai.kz',
  identityApiURI: 'https://qa.identity.taxer.petrelai.kz',
  name: 'staging',
  auth: {
    authority: 'https://qa.identity.taxer.petrelai.kz',
    client_id: 'core_spa',
    redirect_uri: 'https://qa.taxer.petrelai.kz/auth-callback',
    post_logout_redirect_uri: 'https://qa.taxer.petrelai.kz/',
    response_type: 'id_token token',
    scope: 'openid profile email core.api',
    filterProtocolClaims: true,
    loadUserInfo: true,
    automaticSilentRenew: true,
    silent_redirect_uri: 'https://qa.taxer.petrelai.kz/silent-refresh.html'
  },
  googleAnalytics: {
    imports: []
  }
};
