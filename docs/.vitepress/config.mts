import { defineConfig } from 'vitepress'
import { globSync } from 'glob'

import path from 'path'
import url from 'node:url'

const __filename = url.fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

interface SidebarItem {
  text?: string
  link?: string
  collapsed?: boolean
  items?: SidebarItem[]
}

function generateSidebarItems(basePath: string, urlPrefix: string): SidebarItem[] {
  const items: SidebarItem[] = []
  const directories = new Set<string>()
  const fileMap = new Map<string, SidebarItem[]>()
  const indexMap = new Map<string, SidebarItem>()

  const allPaths = globSync(`${basePath}/**/*/`, { absolute: true })
    .sort((a, b) => {
      if (a === "Introduction") return -1
      if (b === "Introduction") return 1
      return a.localeCompare(b)
    })

  const files = globSync(`${basePath}/**/*.md`, { absolute: true })
    .sort((a, b) => {
      if (a === "Introduction") return -1
      if (b === "Introduction") return 1
      return a.localeCompare(b)
    })

  allPaths.forEach(dir => directories.add(dir))

  files.forEach(file => {
    const relativePath = path.relative(basePath, file)
    const link = `${urlPrefix}/${relativePath.replace(/\.md$/, '')}`
    const text = path.basename(relativePath, '.md')
    const dir = path.dirname(file)
    if (text === 'index'|| text === 'README') {
      indexMap.set(dir, { text: 'Introduction', link })
    } else {
      if (!fileMap.has(dir)) {
        fileMap.set(dir, [])
      }
      fileMap.get(dir)!.push({ text, link })
    }
  })

  function buildSidebar(dir: string): SidebarItem[] {
    const items: SidebarItem[] = []

    if (indexMap.has(dir)) {
      items.push(indexMap.get(dir)!)
    }

    if (fileMap.has(dir)) {
      items.push(...fileMap.get(dir)!)
    }

    const subdirs = Array.from(directories)
      .filter(subdir => path.dirname(subdir) === dir)

    subdirs.forEach(subdir => {
      const dirName = path.basename(subdir)
      items.push({
        text: dirName,
        collapsed: true,
        items: buildSidebar(path.resolve(dir, dirName))
      })
    })

    return items
  }

  return buildSidebar(basePath)
}

export default defineConfig({
  title: "TGX-CORE",
  description: "The most powerful framework to interact with the Telegram API..",

  ignoreDeadLinks: true,

  base: '/website/',

  markdown: {
    config: (md) => {
      md.core.ruler.push('replace_keywords_and_types', (state) => {
        state.tokens.forEach((blockToken) => {
          if (blockToken.type === 'inline' && blockToken.children) {
            blockToken.children.forEach((token, idx) => {
              if (token.type === 'text') {

                token.content = token.content
                .replace('\<', '<')
                .replace('\>', '>')
                .replace('\(', '(')
                .replace('\)', ')')

                const keywordReplacements = [
                  { keyword: '$readonly', badge: '<Badge type="danger" text="readonly" />'},
                  { keyword: '$static', badge: '<Badge type="danger" text="static" />'},
                  { keyword: '$async', badge: '<Badge type="tip" text="async" />'},
                  { keyword: '$get', badge: '<Badge type="danger" text="get" />'},
                ]
      
                keywordReplacements.forEach(({ keyword, badge }) => {
                  if (token.content.includes(keyword)) {
                    const parts = token.content.split(keyword);
                    const textBefore = parts[0];
                    const textAfter = parts.slice(1).join(keyword);
      
                    token.content = textBefore;
      
                    const badgeToken = new state.Token('html_inline', '', 0);
                    badgeToken.content = badge;
      
                    const textAfterToken = new state.Token('text', '', 0);
                    textAfterToken.content = textAfter;
      
                    blockToken.children?.splice(idx + 1, 0, badgeToken, textAfterToken);
                  }
                })
                
              }
            });
          }
        });
      });
    }
  },
  themeConfig: {
    search: {
      provider: 'local',
      // options: {
      //   appId: 'ZVXGWWDWD0',
      //   apiKey: '7b1bc6ad54891601d61904a1eaf66e2e',
      //   indexName: 'tgx-core'
      // }
    },

    nav: [
      { text: 'Documentation', link: '/documentation/README' },
      { text: 'Guidebook', link: '/guidebook/README'}
    ],

    sidebar: {
      '/documentation': [
        {
          text: 'Documentation',
          items: generateSidebarItems(
            path.resolve(__dirname, '../documentation'), 
            '/documentation'
          )
        }
      ],

      '/guidebook': [
        {
          text: 'Guidebook',
          items: generateSidebarItems(
            path.resolve(__dirname, '../guidebook'), 
            '/guidebook'
          )
        }
      ],
    },

    socialLinks: [
      { icon: 'github', link: 'https://github.com/TGX-CORE/tgx-core' }
    ]
    
  }
})
