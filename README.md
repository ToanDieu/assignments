## git clone https://github.com/ToanDieu/assignments.git

## run `yarn install` to install all needs dependencies

### `yarn dev`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

### `yarn test`

Launches the test runner in the interactive watch mode.\

### `yarn build`

Builds the app for production to the `build` folder.\

## `languages`

    React
    Redux
    React-Router
    Typescript
    Express.js
    Sass/Scss
    Bootstrap
    React-Bootstrap
    Jest
    React testing library

## `project structure`

    public
        index.html
    src
        - actions
              forecast.ts
              index.ts
        - api
              forecast.ts
              index.ts
        - assets
               - icons
        - components
            - ForecastItem
                - __tests__
                    - __snapshots__
                    index.tsx
                index.scss
                index.tsx
            - ForecastList
                - __tests__
                    index.tsx
                index.scss
                index.tsx
            - LoadingIndicator
                index.scss
               index.tsx
            - NoResult
                - __tests__
                    - __snapshots__
                    index.tsx
                index.scss
                index.tsx
            - OverlayLayer
                index.scss
                index.tsx
            - SearchInput
                - __tests__
                    - __snapshots__
                    index.tsx
                index.scss
                index.tsx
        - containers
            - Home
            index.scss
            index.tsx
        - dto
            index.ts
        - reducers
            forecast.ts
            index.ts
        - saga
            forecast.ts
            index.ts
        - store
            middleware.ts
            index.ts
        - utils
            actionTypes.ts
            index.ts
        App.tsx
        App.scss
        App.test.tsx
        index.tsx
        index.scss
        server.js
        setupTests.js
    .gitignore
    config-overrides.js
    package.json
    tsconfig.json
