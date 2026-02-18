// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
	integrations: [
		starlight({
			title: 'Platform Docs',
			logo: {
				light: './src/assets/solarwinds-logo.svg',
				dark: './src/assets/solarwinds-logo.svg',
			},
			social: [{ icon: 'github', label: 'GitHub', href: 'https://github.com/withastro/starlight' }],
			sidebar: [
				{
					label: 'Entities',
					items: [
						{ label: 'Overview', slug: 'entities' },
						{ label: 'Entity Details', slug: 'entities/details' },
					],
				},
				{
					label: 'Metrics',
					items: [
						{ label: 'Overview', slug: 'metrics' },
						{ label: 'Metric Details', slug: 'metrics/details' },
					],
				},
				{
					label: 'Platform Connect',
					items: [
						{ label: 'Overview', slug: 'platform-connect' },
						{ label: 'Platform Connect Details', slug: 'platform-connect/details' },
					],
				},
				{
					label: 'AI Platform',
					items: [
						{ label: 'Overview', slug: 'ai-platform' },
						{ label: 'AI Platform Details', slug: 'ai-platform/details' },
					],
				},
				{
					label: 'API Reference',
					slug: 'api',
				},
				{
					label: 'How To',
					items: [
						{ label: 'How to contribute', slug: 'how-to/contribute' },
						{ label: 'How to add content', slug: 'how-to/add-content' },
					],
				},
			],
			customCss: [
				'./src/styles/custom.css',
			],
			editLink: {
				baseUrl: 'https://github.com/ravirajsubramanian/starlight-docs/tree/main/',
			},
		}),
	],
});
