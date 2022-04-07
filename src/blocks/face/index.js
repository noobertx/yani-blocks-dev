const { registerBlockType } = wp.blocks;
import Edit from './Edit';
const {	InnerBlocks } = wp.blockEditor;

console.log("yani/face is Being Registered");
registerBlockType('yani/face', {
	title: 'HERO Area',
	category: 'wprig-blocks',
	parent: ['yani/hero'],
	supports: {
        html: false,
        inserter: false,
        reusable: false,
    },
    icon: 'universal-access-alt',
	description: 'SERPWARS inspired Hero Face',
	keywords: ['face'],	
	edit: Edit,
	save: () => {  return <InnerBlocks.Content /> }
});