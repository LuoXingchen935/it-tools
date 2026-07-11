import { defineTool } from '../tool';

export const tool = defineTool({
  name: 'Markdown preview',
  path: '/markdown-preview',
  description: 'Live preview of Markdown as you type',
  keywords: ['markdown', 'preview'],
  component: () => import('./markdown-preview.vue'),
  icon: defineAsyncComponent(() => import('@vicons/tabler/es/Markdown')),
  createdAt: new Date('2026-03-17'),
  category: 'Markdown',
});
