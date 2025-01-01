import React from 'react'
import { DocsThemeConfig } from 'nextra-theme-docs'
import { useNextSeoProps } from './config/useNextSeoProps'

const config: DocsThemeConfig = {
  logo: <span>Kaijotic's Dev Notes</span>,
  project: {
    link: 'https://github.com/Kaijotic/dev-notes',
  },
  docsRepositoryBase: 'https://github.com/Kaijotic/dev-notes/tree/main',
  footer: {
    text: '© 2023 - Kaijotic Powered by Nextra, Github Pages',
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
