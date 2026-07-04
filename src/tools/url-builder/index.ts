import { WorldUpload } from '@vicons/tabler';
import { defineTool } from '../tool';

export const tool = defineTool({
  name: 'URL Builder',
  path: '/url-builder',
  description: 'Allows to edit and build URLs with query parameters',
  keywords: ['url', 'builder'],
  component: () => import('./url-builder.vue'),
  icon: WorldUpload,
  createdAt: new Date('2026-07-04'),
  category: 'Forensic',
});
