import { defineTool } from '../tool';

export const tool = defineTool({
  name: 'Markdown Table Generator',
  path: '/markdown-table-generator',
  description: 'Create GitHub-flavored Markdown tables with a visual editor.',
  keywords: ['markdown', 'table', 'generator', 'gfm', 'github'],
  component: () => import('./markdown-table-generator.vue'),
  icon: defineAsyncComponent(() => import('@vicons/tabler/es/Table')),
  createdAt: new Date('2026-07-11'),
  category: 'Markdown',
});
