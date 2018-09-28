```
yarn install
```
*content of eslintrc was changed
  -"no-underscore-dangle": [2, { "allowAfterThis": true }] - was added to allow naming of a private properties with underscore in class
  -"prefer-destructuring": ["error", {"object": true, "array": false}] - was added to allow for normal destructuring of array with index, example let element = array[index];
