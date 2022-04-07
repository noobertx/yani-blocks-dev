const { registerBlockType } = wp.blocks;
import Edit from './Edit';
import Save from './Save';

registerBlockType('yani/hero', {
	title: 'HERO Area ',
	category: 'wprig-blocks',
	icon: 'smiley',
	supports: {
		align: ['wide', 'full']
	},


	description: 'SERPWARS inspired Hero Area',
	keywords: ['example', 'test'],	
	edit: Edit,
	save: Save
	// save: () => {  return <InnerBlocks.Content /> }
});