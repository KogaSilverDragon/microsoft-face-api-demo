// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

const MSCSfaceAPI_base: string = 'https://westcentralus.api.cognitive.microsoft.com/face/v1.0';
export const environment = {
  production: false,
  subscriptionKey: '[YOUR KEY HERE]',
  FaceAPI_detect: `${MSCSfaceAPI_base}/detect`
};
