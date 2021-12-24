/*
* Create and export configuration variables
*
*/

// Container for all the environments
const environments = {};
const stripeKey = process.env.STRIPE_API_KEY || "";
const token = process.env.STRIPE_TOKEN || "";
const mailgunKey = process.env.MAILGUN_API_KEY || "";
const mailgunDomain = process.env.MAILGUN_DOMAIN || "";
const mailgunSender = process.env.MAILGUN_SENDER || "";

// Staging (default) environment
environments.staging = {
  httpPort: 3000,
  httpsPort: 3001,
  envName: "staging",
  hashingSecret: "thisIsASecret",
  stripeApiKey: stripeKey,
  stripeToken: token,
  mailgun: {
    sender: mailgunSender,
    key: mailgunKey,
    path: `/v3/${mailgunDomain}/messages`
  }
};

// Production environment
environments.production = {
  httpPort: 5000,
  httpsPort: 5001,
  envName: "production",
  hashingSecret: "thisIsAlsoASecret",
  stripeApiKey: stripeKey,
  stripeToken: token,
  mailgun: {
    sender: mailgunSender,
    key: mailgunKey,
    path: `/v3/${mailgunDomain}/messages`
  }
};

// Determine which environment was passed as a command-line argument
const currentEnvironment =
  typeof process.env.NODE_ENV == "string"
    ? process.env.NODE_ENV.toLowerCase()
    : "";

// CHeck that the current environment is one of hte environmnets above, if not defaut to staging
const environmentToExport =
  typeof environments[currentEnvironment] == "object"
    ? environments[currentEnvironment]
    : environments.staging;

// export the module
console.table(environmentToExport);
module.exports = environmentToExport;
