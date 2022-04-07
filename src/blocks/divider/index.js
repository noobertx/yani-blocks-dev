const { registerBlockType } = wp.blocks;
import Edit from './Edit';
registerBlockType('yani/divider', {
	title: 'Yani Divider',
	category: 'wprig-blocks',
	icon: 'smiley',
	supports: {
		align: ['wide', 'full']
	},
	description: 'Custom Divider',
	keywords: ['example', 'diviver'],	
	edit: Edit,
	save: () => {  return null; }
});