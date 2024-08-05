import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

export default defineConfig({
	integrations: [
		starlight({
			title: '職務経歴書',
			social: {
				github: 'https://github.com/soags',				
			},
			sidebar: [
				{
					label: 'soags',
					items: [
						{ label: '職務経歴書', slug: 'index' },
					],
				}				
			],
		}),
	],
});
