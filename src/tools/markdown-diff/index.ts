import { defineTool } from '../tool';

export const tool = defineTool({
  name: 'Markdown Diff',
  path: '/markdown-diff',
  description: 'Compare two Markdown documents and see the differences between them.',
  keywords: ['markdown', 'diff', 'compare', 'difference', 'markdown diff', 'md', 'text'],
  component: () => import('./markdown-diff.vue'),
  icon: defineAsyncComponent(() => import('@vicons/tabler/es/Markdown')),
  createdAt: new Date('2026-07-10'),
  category: 'Markdown',
});
