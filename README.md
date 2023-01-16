npm create vite@latest my-react-app --template react
cd my-react-app
npm install
npm run dev

npm init @eslint/config
npm install -D eslint-plugin-react eslint-plugin-react-hooks eslint-config-airbnb

"extends": [
        "eslint:recommended",
        "plugin:react/recommended",
        "plugin:react-hooks/recommended",
        "plugin:react/jsx-runtime",
        "plugin:import/recommended",
        "airbnb",
        "prettier"
    ],

"plugins": [
        "react-hooks",
        "react"
    ],

"rules": {
        "react/react-in-jsx-scope": "off",
        "import/prefer-default-export": "off",
        "react/prop-types": 0,
        "react/jsx-filename-extension": [1, { "extensions": [".js", ".jsx"] }],
        "react-hooks/rules-of-hooks": "error",
        "react-hooks/exhaustive-deps": "warn" 
    }


npm install -D --save-exact prettier eslint-config-prettier
echo {}> .prettierrc.json

{
  "trailingComma": "es5",
  "tabWidth": 4,
  "semi": true,
  "singleQuote": true
}

npx create-react-app my-app --template redux-typescript