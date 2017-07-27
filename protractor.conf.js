// Protractor configuration file, see link for more information
// https://github.com/angular/protractor/blob/master/lib/config.ts

exports.config = {
  allScriptsTimeout: 11000,
  specs: [
    'e2e/**/*.feature'
  ],
  multiCapabilities: [
    {
      browserName: 'chrome',
      chromeOptions: {
        args: ['disable-infobars']
      },
      shardTestFiles: true,
      maxInstances: 1
    }
  ],
  directConnect: true,
  baseUrl: 'http://localhost:4200/',
  framework: 'custom',
  frameworkPath: require.resolve('protractor-cucumber-framework'),
  cucumberOpts: {
    compiler: "ts:ts-node/register",
    format: 'pretty',
    require: ['e2e/**/*.steps.ts'],
    tags: ''
  },
  onPrepare() {
    require('ts-node').register({
      project: 'e2e/tsconfig.e2e.json'
    });
    // jasmine.getEnv().addReporter(new SpecReporter({ spec: { displayStacktrace: true } }));
  }
};
