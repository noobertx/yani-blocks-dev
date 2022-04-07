const { registerBlockType } = wp.blocks;
import Edit from './Edit';
console.log("yani/button is Being Registered");
registerBlockType('yani/button', {
	title: 'Yani Button',
	category: 'wprig-blocks',
	icon: 'smiley',
	supports: {
		align: ['wide', 'full']
	},
	description: 'Custom Button',
	keywords: ['example', 'button'],	
	edit: Edit,
	save: () => {  return null; }
});