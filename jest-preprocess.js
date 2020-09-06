// REF:  https://www.gatsbyjs.com/docs/unit-testing/#1-installing-dependencies

const babelOptions = {
  presets: ["babel-preset-gatsby", "@babel/preset-typescript"],
}

module.exports = require("babel-jest").createTransformer(babelOptions)
