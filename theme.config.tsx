import React from 'react'
import { DocsThemeConfig } from 'nextra-theme-docs'
import { useNextSeoProps } from './config/useNextSeoProps'

const config: DocsThemeConfig = {
  logo: <span>b5h22's Dev Notes</span>,
  project: {
    link: 'https://github.com/b5h22/dev-notes',
  },
  docsRepositoryBase: 'https://github.com/b5h22/dev-notes/tree/main',
  footer: {
    text: '© 2023 - b5h22 Powered by Nextra, Github Pages',
  },
  feedback: {
    content: () => <>Question? Give me feedback →</>,
    labels: 'feedback',
  },
  useNextSeoProps,
  sidebar: {
    defaultMenuCollapseLevel: 1,
  },
}

export default config
