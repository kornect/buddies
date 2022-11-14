(function(window) {
  window['env'] = window['env'] || {};

  // Environment variables
  window['env']['debug'] = '${DEBUG}';
  window['env']['appVersion'] = '${VERSION}';
  window['env']['domain'] = '${API_URL}';
  window['env']['hasura'] = '${GRAPHQL_URL}';
  window['env']['googleMapsApi'] = '${GOOGLE_MAPS_API}';
})(this);
