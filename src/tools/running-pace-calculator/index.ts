import { Run } from '@vicons/tabler';
import { defineTool } from '../tool';

export const tool = defineTool({
  name: 'Running Pace Calculator',
  path: '/running-pace-calculator',
  description: 'Calculate your running pace, estimate your finish times for popular races, break down splits, and find your training zones.',
  keywords: ['running', 'pace', 'calculator'],
  component: () => import('./running-pace-calculator.vue'),
  icon: Run,
  createdAt: new Date('2026-06-21'),
  category: 'Data',
});
