# install Next.js
`npx create-next-app`

# change to app dir
`cd app`

# init tsconfig
```
touch tsconfig.json`
yarn run dev
```

# add Typescript
`yarn add --dev typescript @types/react @types/node`

# install SASS
`npm install sass`

# install ESLint
`yarn add -D eslint @typescript-eslint/parser @typescript-eslint/eslint-plugin eslint-plugin-react`

# install Prettier
`yarn add -D prettier eslint-config-prettier eslint-plugin-prettier`

# install simple sort plugin
`yarn add -D eslint-plugin-simple-import-sort`

# init ESLint configuration files
`touch .eslintrc.json .eslintignore`

# populate ESLint run commands
```
{
  "parser": "@typescript-eslint/parser",
  "extends": [
    "eslint:recommended",
    "plugin:@typescript-eslint/eslint-recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:react/recommended",
    "prettier/react",
    "prettier/@typescript-eslint",
    "plugin:prettier/recommended"
  ],
  "env": {
    "es6": true,
    "browser": true,
    "jest": true,
    "node": true
  },
  "plugins": [
    "@typescript-eslint",
    "react",
    "simple-import-sort",
    "prettier"
  ],
  "rules": {
    "react/react-in-jsx-scope": "off"
  },
  "settings": {
    "react": {
      "version": "detect"
    }
  },
  "globals": {
    "React": "writable"
  }
}
```

# populate ESLint ignores
```
**/node_modules/*
**/out/*
**/.next/*
```

# init Prettier configuration files
`touch .prettierrc .prettierignore`

# populate Prettier run commands
```
{
	"semi": true,
	"singleQuote": true
}
```

# populate Prettier ignores
```
node_modules
.next
yarn.lock
package-lock.json
public
```

# install testing packages
`yarn add -D jest @testing-library/react @types/jest babel-jest @testing-library/jest-dom @testing-library/user-event @testing-library/dom`

# init test configurations
`touch .babelrc jest.config.js jest.setup.ts`

# populate .babelrc
```
{
  "presets": [
    "next/babel"
  ]
}
```

# populate jest.config.js
```
module.exports = {
  setupFilesAfterEnv: ['<rootDir>/jest.setup.ts'],
  testPathIgnorePatterns: ['<rootDir>/.next/', '<rootDir>/node_modules/'],
};
```

# populate jest.setup.ts
`import '@testing-library/jest-dom';`