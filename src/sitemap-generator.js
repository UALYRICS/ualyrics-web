require("babel-register")({
  presets: ["es2015", "react"]
});
 
const router = require("./sitemap-routes").default;
const Sitemap = require("react-router-sitemap").default;

const AWSAmplify = require("aws-amplify");
const Amplify = AWSAmplify.default;
const config = require("./aws-exports").default;
const API = AWSAmplify.API;

const GRAPHQL_AUTH_MODE = require("@aws-amplify/api").GRAPHQL_AUTH_MODE;

Amplify.configure(config);

async function generateSitemap() {
  console.info('generateSitemap');
  const ids = await listTranslationIds();
  console.info('generateSitemap ids length: ', ids.length);

  let idMap = [];

  for(var i = 0; i < ids.length; i++) {
    idMap.push({ id: ids[i] });
  }

  const paramsConfig = {
    "/translations/:id": idMap
  };

  return (
    new Sitemap(router)
      .applyParams(paramsConfig)
      .build("https://www.ualyrics.com")
      .save("./public/sitemap.xml")
  );
}

async function listTranslationIds(){

  const listTranslations = `
        query ListTranslations(
          $limit: Int
          $nextToken: String
        ) {
          listTranslations(limit: $limit, nextToken: $nextToken) {
            items {
              id
            }
            nextToken
          }
        }
      `;


  let nextToken = null;
  let translationIds = [];
  {
    const result = await API.graphql({
      query: listTranslations,
      variables: {
        limit: 100,
        nextToken: nextToken,
      },
      authMode: GRAPHQL_AUTH_MODE.API_KEY,
    });

    console.info('listTranslationIds fetched translations: ', result.data.listTranslations.items.length);

    translationIds = translationIds.concat(result.data.listTranslations.items.map(item => item.id));
    nextToken = result.data.listTranslations.nextToken;
  } while(nextToken != null);

  return translationIds;
};


generateSitemap()
.then(
  () => {
    console.info('Sitemap Generated')
  },
  err => {
    console.info('Error while generating sitemap');
    console.info(err);
  }
).finally(
  () => process.exit()
);