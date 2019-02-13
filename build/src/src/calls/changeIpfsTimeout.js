const params = require('../params');

/**
 * Used to test different IPFS timeout parameters live from the ADMIN UI.
 *
 * @return {Object}
 */
const getStats = async ({timeout}) => {
  if (!timeout) throw Error('kwarg timeout must be defined');

  params.IPFS_TIMEOUT = timeout;

  return {
    message: `IPFS timeout set to ${timeout}`,
    logMessage: true,
    userAction: true,
  };
};

module.exports = getStats;
