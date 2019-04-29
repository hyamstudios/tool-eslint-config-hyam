module.exports = {
  env: {
    browser: true,
    node: true,
    jest: true,
  },
  extends: ["airbnb", "prettier", "prettier/react"],
  parser: "babel-eslint",
  rules: {
    "react/jsx-filename-extension": ["error", { extensions: [".js", ".jsx"] }],
  },
};
