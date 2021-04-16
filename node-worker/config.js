const convict = require('convict');

const config = convict({
  examples: {
    name: {
      default: 'world',
      doc: 'The name to be greeted',
      format: String,
      env: 'EXAMPLE_NAME'
    },
  }
});

config.validate({ allowed: 'strict' });
module.exports = config;
