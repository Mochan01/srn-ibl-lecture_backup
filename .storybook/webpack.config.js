module.exports = async ({ config, mode }) => {

  config.watchOptions = {
    ...config.watchOptions,
    aggregateTimeout: 200,
    poll: 1000
  };

  return config;
};
