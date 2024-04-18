// webpack.config.js

module.exports = {
    // other configurations...
    externals: {
      // 'three' should be available externally
      'three': 'THREE'
    }
  };