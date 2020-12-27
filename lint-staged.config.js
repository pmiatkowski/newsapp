module.exports = {
  '*.{ts,tsx}': ['eslint -c .eslintrc.js --ignore-path .eslintignore --fix'],
  '*.{css,scss,sass}': ['prettier --write', 'stylelint'],
};
