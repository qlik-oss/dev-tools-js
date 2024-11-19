import qlik from "@qlik/eslint-config";

export default qlik.compose(...qlik.configs.react, {
  name: "test-react",
  rules: {
    // modify rules here
  },
});
