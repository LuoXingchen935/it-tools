import { defineTool } from '../tool';

export const tool = defineTool({
  name: 'Cron Expression Builder',
  path: '/cron-expression-builder',
  description: 'Generate Cron expressions from a UI',
  keywords: ['cron', 'expression', 'builder'],
  component: () => import('./cron-expression-builder.vue'),
  icon: defineAsyncComponent(() => import('@vicons/tabler/es/Clock')),
  createdAt: new Date('2026-07-11'),
  category: 'Default',
});
