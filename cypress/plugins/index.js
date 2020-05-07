import percyHealthCheck from '@percy/cypress/task';

module.exports = (on) => {
  on('task', percyHealthCheck);
};
