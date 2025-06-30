const { getDefaultConfig } = require("expo/metro-config");

module.exports = (async () => {
  const config = await getDefaultConfig(__dirname);
  return {
    ...config,
    resolver: {
      ...config.resolver,
      sourceExts: [...config.resolver.sourceExts, "jsx", "js", "ts", "tsx"],
      // Exclude test-related modules from bundling
      blockList: [
        /node_modules\/@testing-library/,
        /node_modules\/jest/,
        /node_modules\/react-test-renderer/,
      ],
    },
  };
})();
