import { CustomMarkdownTheme } from './default-theme.mjs'

export function load(app) {
    app.renderer.defineTheme('tgx-core', CustomMarkdownTheme)
}