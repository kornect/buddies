const { readFile, writeFile } = require('fs');

try {
  const version = process.env.VERSION;
  const debug = process.env.DEBUG;
  const googleMapsApi = process.env.GOOGLE_MAPS_API;
  const apiUrl = process.env.API_URL;
  const graphqlUrl = process.env.GRAPHQL_URL;

  console.log(`Script received: ${version}, ${debug}, ${googleMapsApi}, ${apiUrl}, ${graphqlUrl}`);

  // get the environment file
  const tsFile = 'src/environments/environment.prod.ts';
  readFile(tsFile, 'utf8', function(err, input) {
    if (err) {
      return console.log(err);
    }

    // replace placeholders on the environment file
    const result = input
      .replace(/version: '(.*)'/g, `version: '${version}'`)
      .replace(/debug: '(.*)'/g, `debug: '${debug}'`)
      .replace(/googleMapsApi: '(.*)'/g, `googleMapsApi: '${googleMapsApi}'`)
      .replace(/apiUrl: '(.*)'/g, `apiUrl: '${apiUrl}'`)
      .replace(/graphqlUrl: '(.*)'/g, `graphqlUrl: '${graphqlUrl}'`);

    writeFile(tsFile, result, 'utf8', function(err) {
      if (err) return console.log(err);
    });
  });

  // index file
  const indexFile = 'src/index.html';
  readFile(indexFile, 'utf8', function(err, input) {
    if (err) {
      return console.log(err);
    }

    // set the apis preconnect on the index.html
    const result = input
      .replace('http://localhost:3000', apiUrl)
      .replace('http://localhost:8080', graphqlUrl?.replace('/v1/graphql', ''));

    writeFile(indexFile, result, 'utf8', function(err) {
      if (err) return console.log(err);
    });
  });
} catch (error) {
  console.error('Error occurred:', error);
  throw error;
}
