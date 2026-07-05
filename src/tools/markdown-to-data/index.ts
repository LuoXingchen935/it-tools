import { TableExport } from '@vicons/tabler';
import { defineTool } from '../tool';

export const tool = defineTool({
  name: 'Markdown to data',
  path: '/markdown-to-data',
  description: 'Convert Markdown table to JSON, YAML, CSV, SQL INSERT, XML, Markdown or XLSX',
  keywords: ['markdown', 'table', 'excel', 'csv', 'xlsx', 'sql', 'json', 'yaml', 'insert', 'md', 'tsv', 'xml'],
  component: () => import('./markdown-to-data.vue'),
  icon: TableExport,
  createdAt: new Date('2026-07-04'),
  category: 'Markdown',
});
