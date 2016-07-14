module.exports = {
  target: "node",
  entry: ['./index'],
  output: {
    path: './build',
    filename: '[name].js'
  },
  web3Loader: {
    //from: '0xaddress'
  },
  module: {
    loaders: [
      {
        test: /\.sol$/,
        loaders: ['web3', 'solc']
      },
      {
        test: /\.json$/,
        loaders: ['json']
      }
    ]
  }
};
