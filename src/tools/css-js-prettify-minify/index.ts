import { defineTool } from '../tool';

export const tool = defineTool({
  name: 'CSS/JS Prettify & Minify',
  path: '/css-js-prettify-minify',
  description: 'Prettify or minify your CSS and JavaScript code online.',
  keywords: ['css', 'javascript', 'js', 'prettify', 'minify', 'beautify', 'format', 'uglify', 'compress', 'formatter'],
  component: () => import('./css-js-prettify-minify.vue'),
  icon: defineAsyncComponent(() => import('@vicons/tabler/es/Code')),
  createdAt: new Date('2026-07-11'),
  category: 'Development',
});
