const { registerBlockType } = wp.blocks;
import Edit from './Edit';
import Save from './Save';

console.log("yani/side is Being Registered");
registerBlockType('yani/side', {
	title: 'Side',
	category: 'wprig-blocks',
	parent: ['yani/highlightbox','yani/cubebox'],
	supports: {
        html: false,
        inserter: false,
        reusable: false,
    },
    getEditWrapperProps(attributes) {
        return {
            'data-tab': attributes.id,
            className: `wp-block editor-block-list__block block-editor-block-list__block wprig-tab-content`
        }
    },
    icon: 'universal-access-alt',
	description: 'SERPWARS inspired Hero Side',
	keywords: ['side'],	
	edit: Edit,
	save: Save
});