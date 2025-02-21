const getRedirectUrl = () => {
  if (window.location.hostname === 'localhost') {
    return 'http://localhost:8000/oauth2-redirect.html';
  } else {
    return 'https://quantworksinc.github.io/ds-api-spec/oauth2-redirect.html';
  }
};

window.onload = function() {
  window.ui = SwaggerUIBundle({
    url: 'openapi.yaml',
    dom_id: '#swagger-ui',
    oauth2RedirectUrl: getRedirectUrl(),
    defaultModelRendering: 'model',
    deepLinking: true,
    presets: [
      SwaggerUIBundle.presets.apis,
      SwaggerUIStandalonePreset
    ],
    layout: "StandaloneLayout"
  });
  window.ui.initOAuth({
    clientId: "7ljj5bscj1s6d9tiuldtpfoi29",
    clientSecret: "",
    usePkceWithAuthorizationCodeGrant: true,
    scopes: ["email", "openid"],
    appName: "Default Sleuth API Docs"
  });
};
