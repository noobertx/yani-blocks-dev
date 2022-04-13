const { registerBlockType } = wp.blocks;
const { InnerBlocks } = wp.blockEditor;
import Edit from './Edit';
registerBlockType('yani/highlightbox', {
	title: 'Yani Highlightbox',
	category: 'wprig-blocks',
	icon: 'smiley',
	supports: {
		align: ['wide', 'full']
	},
	description: 'Custom Divider',
	keywords: ['box', 'highlight'],	
	
    example: {
        attributes: {
            tabTitles: ["Primary","Secondary"],
        },
        innerBlocks: [
            {
                name: 'yani/face',
                attributes:{
                	id:1,
                	customClassName: 'wprig-active' 
                },
                innerBlocks: [
                    
                ],
            },{
                name: 'yani/face',
                attributes:{
                	id:2,
                },
                innerBlocks: [
                    
                ],
            },
        ],
    },
	edit: Edit,
	save: () => {   return (<InnerBlocks.Content />) }	
});