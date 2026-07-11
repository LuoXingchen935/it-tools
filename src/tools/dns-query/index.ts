import { defineTool } from '../tool';

export const tool = defineTool({
  name: 'Cloudflare DNS/RDAP Queries',
  path: '/dns-query',
  description: 'Query DNS records and RDAP for any domain name online using Cloudflare DNS/RDAP.org.',
  keywords: [
    'dns',
    'query',
    'lookup',
    'resolve',
    'domain',
    'A',
    'AAAA',
    'CNAME',
    'MX',
    'TXT',
    'NS',
    'SOA',
    'network',
    'devops',
    'rdap',
  ],
  component: () => import('./dns-query.vue'),
  icon: defineAsyncComponent(() => import('@vicons/tabler/es/World')),
  createdAt: new Date('2026-07-11'),
  category: 'Network',
  externAccessDescription:
    "This tool resolves DNS records for a given domain using Cloudflare's DNS over HTTPS API (https://cloudflare-dns.com). It resolves WhoIs throught RDAP API (https://rdap.org).",
});
