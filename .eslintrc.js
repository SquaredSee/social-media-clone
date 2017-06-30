module.exports = {
  "extends": "airbnb",
  "env": {
    "browser": true,
  },
  "plugins": [
    "react",
    "jsx-a11y",
    "import"
  ],
  "rules": {
    "arrow-body-style": [0],
    "brace-style": [1, "stroustrup"],
    "class-methods-use-this": [0],
    "no-console": [0],
    "react/jsx-filename-extension": [1, { "extensions": [".js", ".jsx"] }],
  }
};
