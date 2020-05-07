const percyHealthCheck = require('@percy/cypress/task'); /* eslint-disable-line @typescript-eslint/no-var-requires */

module.exports = (on) => {
  on('task', percyHealthCheck);
};
