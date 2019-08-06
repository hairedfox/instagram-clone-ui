
const withSass = require('@zeit/next-sass')

module.exports = withSass({
  webpack: (config) => {
    config.module.rules.push(
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: "eslint-loader",
        options: {
          // eslint options (if necessary)
          emitError: true,
          failOnError: true
        }
      }
    )
    return config
  }
})
