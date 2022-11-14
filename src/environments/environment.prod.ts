export const environment = {
  production: false,
  name: 'Lusty',
  // @ts-ignore
  version: window['env']['version'] || '0.0.1',
  // @ts-ignore
  debug: window['env']['debug'] || 'false',
  // @ts-ignore
  googleMapsApi: window['env']['googleMapsApi'] || '0.0.1',
  // @ts-ignore
  apiUrl: window['env']['apiUrl'] || 'http://localhost:3000',
  // @ts-ignore
  graphqlUrl: window['env']['graphqlUrl'] || 'http://localhost:8080/v1/graphql'
};
