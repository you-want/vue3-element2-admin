# vue3-element2-admin

vue3 + elementPlus2 + vite5 + pinia2

- [UnoCSS](https://unocss.dev/interactive/)

## 开发注意

1. 由于使用了自动引入组件的插件，所以在开发过程过程中，可以不手动引入 `vue、vue-router` 的 api，和 `ElementPlus、components` 的组件。可直接使用！！！
2. 开发页面级别的放在 views 下，起名字要`驼峰规则`，起码两个单词。

## Recommended IDE Setup

推荐的 IDE 配置是 `Visual Studio Code + Vue - Official` 扩展。

## Type Support for `.vue` Imports in TS

TypeScript cannot handle type information for `.vue` imports by default, so we replace the `tsc` CLI with `vue-tsc` for type checking. In editors, we need `Vue - Official` to make the TypeScript language service aware of `.vue` types.

## Customize configuration

See [Vite Configuration Reference](https://vitejs.dev/config/).

## Project Setup

```sh
pnpm install
```

### Compile and Hot-Reload for Development

```sh
pnpm dev
```

### Type-Check, Compile and Minify for Production

```sh
pnpm build
```

### Run Unit Tests with [Vitest](https://vitest.dev/)

```sh
pnpm test:unit
```

### Lint with [ESLint](https://eslint.org/)

```sh
pnpm lint
```
