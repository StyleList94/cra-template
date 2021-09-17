# cra-template-pretty-code

[![react-scripts](https://img.shields.io/npm/v/react-scripts?label=react-scripts)](https://github.com/facebook/create-react-app)

###### Create React App with Typescript, ESLint(Airbnb Styleguide), Prettier

## Get Started

```zsh
npx create-react-app my-app --template pretty-code

# or yarn
yarn create react-app my-app --template pretty-code
```

## Configuration Information

### ESLint

```json
// .eslintrc
{
  "env": {
    "browser": true,
    "es6": true,
    "jest": true
  },
  "extends": [
    "airbnb",
    "airbnb/hooks",
    "airbnb-typescript",
    "plugin:@typescript-eslint/recommended",
    "plugin:jest/recommended",
    "plugin:prettier/recommended"
  ],
  "parser": "@typescript-eslint/parser",
  "parserOptions": {
    "ecmaFeatures": {
      "jsx": true
    },
    "ecmaVersion": 2018,
    "sourceType": "module",
    "project": "./tsconfig.json"
  },
  "plugins": ["@typescript-eslint", "jest", "react-hooks"],
  "ignorePatterns": ["setupTests.ts"],
  "rules": {
    "react/react-in-jsx-scope": "off",
    "react/jsx-filename-extension": [1, { "extensions": [".tsx"] }],
    "react/prop-types": "off",
    "react/jsx-props-no-spreading": "off",
    "react/no-array-index-key": "off",
    "react-hooks/rules-of-hooks": "error",
    "func-names": ["error", "as-needed"],
    "no-unused-vars": "warn",
    "@typescript-eslint/explicit-module-boundary-types": "off",
    "import/no-extraneous-dependencies": [
      "error",
      { "devDependencies": ["**/*.test.ts", "**/*.test.tsx"] }
    ]
  },
  "settings": {
    "react": {
      "version": "detect"
    }
  }
}
```

### Prettier

```json
// .prettierrc
{
  "singleQuote": true,
  "semi": true,
  "useTabs": false,
  "tabWidth": 2,
  "trailingComma": "all",
  "printWidth": 80
}
```
