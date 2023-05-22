const path = require("path");
module.exports = {
  entry: "./src/index.ts",
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: "ts-loader",
        include: [path.resolve(__dirname, "src")],
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
        exclude: "/node_modules/",
      },
      {
        test: /\.wgsl$/,
        use: "ts-shader-loader",
      },
    ],
  },
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "dist"),
  },
  mode: "development",
  devServer: {
    port: 8080,
    static: path.resolve(__dirname, "dist"),
    hot: true,
  },
  devtool: "cheap-module-source-map",
  resolve: {
    extensions: [".ts", ".tsx", ".js"],
  },
};
