module.exports = {
  entry: __dirname + "/client/src/index.js",
  module: {
    rules: [
      {
        test: /\.js$|jsx/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env", "@babel/preset-react"]
          }
        }
      }
    ]
  },
  output: {
    filename: "bundle.js",
    path: __dirname + "/client/dist"
  },
  resolve: {
    modules: ["node_modules"],
    extensions: [".js", ".jsx"],
    mainFields: ["loader", "main"]
  }
};
