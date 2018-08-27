# Practise React

## How to start

1. Checked node's version must be 8 or above.
2. Run `npm install` / `yarn install`
3. Run `npm run dev`
4. Open `localhost:8000` with browser.

## 資料夾描述

`[X]: 暫時沒有使用`

```
practise-react
├─ .circleci ([X] Circle CI 設定檔)
│  └─ config.yml
├─ .eslintIgnore ([X] ESLint 設定檔之一)
├─ .eslintrc.json ([X] ESLint 設定檔之一)
├─ .github ([X] Github 發 Issue/PE 的訊息的模板)
│  ├─ ISSUE_TEMPLATE.md
│  └─ PULL_REQUEST_TEMPLATE.md
├─ .gitignore
├─ app.js (服務的進入點)
├─ config (基礎服務設定檔)
│  ├─ postcss (CSS 轉換和前 Browser 前綴)
│  │  ├─ development.js
│  │  └─ production.js
│  ├─ webpack (Bundle tool)
│  │  ├─ common.js
│  │  ├─ development.js
│  │  └─ production.js
├─ entry (React 內容在這)
│  └─ index.js
├─ generic ([X] 放通用的 React 設定)
│  ├─ rootReducers.js
│  ├─ routers.js
│  ├─ stylesheets
│  │  ├─ colors.js
│  │  ├─ index.scss
│  │  ├─ scss
│  │  │  └─ _colors.scss
│  ├─ utils
│  │  ├─ browser.js
│  │  ├─ createActions.js
│  │  ├─ createRootApp.js
│  │  ├─ createRouteItems.js
│  │  └─ route.js
├─ package.json (Npm package)
├─ README.md
├─ vendor
│  ├─ images
│  │  └─ favicon-180x180.png
└─ yarn.lock
```
