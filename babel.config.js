module.exports = function (api) {
  api.cache(true);
  const env = {
    "test": {
      "presets": [["@babel/preset-env"]]
    }
  };
  const presets = ["@babel/preset-react"];
  const plugins = ["@babel/plugin-transform-modules-commonjs", "@babel/plugin-proposal-optional-chaining", "@babel/plugin-proposal-nullish-coalescing-operator"];
  return { presets, plugins };
};
