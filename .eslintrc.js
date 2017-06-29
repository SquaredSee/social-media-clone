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
    "brace-style": [1, "stroustrup"],
    "no-console": [0],
    "react/jsx-filename-extension": [1, { "extensions": [".js", ".jsx"] }],
  }
};
