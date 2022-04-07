
const { Component , Fragment} = wp.element;
const { select, withDispatch } = wp.data
const { compose } = wp.compose;
const { ServerSideRender } = wp.editor;
const { RichText,InnerBlocks, InspectorControls, BlockControls, AlignmentToolbar } = wp.blockEditor;
const { ToggleControl, PanelBody, PanelRow, CheckboxControl, SelectControl,Toolbar, IconButton,Placeholder, Disabled  } = wp.components;
const {
	Alignment,
	Url,
	Separator,
	RadioAdvanced,
	ColorAdvanced,
	InspectorTab,
	InspectorTabs,
	InspectorSections,
	Background,
	Range,
	withCSSGenerator,
	Styles
} = wp.wprigComponents
const { __ } = wp.i18n;


class Edit extends Component {
 	constructor(props) {
		super(props);
		this.state = {
			editMode: true,
			currentTab: 0,
			device: 'md',
            selector: true,
            spacer: true
		}
	}

	componentDidMount() {
        const { setAttributes, clientId, attributes: { uniqueId } } = this.props
        const _client = clientId.substr(0, 6)
        if (!uniqueId) {
            setAttributes({ uniqueId: _client });
        } else if (uniqueId && uniqueId != _client) {
            // setAttributes({ uniqueId: _client });

        }
    }

    

 	getInspectorControls = () => {
		const { attributes:{
			uniqueId,
			bodyBg,
			separator_top_style,
			separator_bottom_style,
			separator_position,
			content_alignment,
			text_align,
			hero_content_width,
			enable_spacer,
		}, setAttributes } = this.props;

		const { device,currentTab } = this.state
 
		return (
			<InspectorControls key="inspector">
				<InspectorTabs tabs={['normal','hover', 'advance']} defaultTab="normal">
				
					<InspectorTab key='normal'>
						
						<PanelBody
						title="Image"
						initialOpen={false}	>
							<PanelRow>	

									<Background
		                                    label={'Background'}
		                                    sources={['image', 'gradient']}
		                                    value={bodyBg} onChange={val => setAttributes({ bodyBg: val })} 
		                                />
								</PanelRow>	
								
							</PanelBody>
						<PanelBody 	title="Content"	initialOpen={false}	>
							<PanelRow>	
								<Alignment label={__('Content Alignment')} alignmentType="content" value={content_alignment} onChange={val =>  setAttributes({ content_alignment: val })}  disableJustify responsive device={device}  onDeviceChange={value => this.setState({ device: value })} />
							</PanelRow>	
							<PanelRow>	
								<Alignment label={__('Text Alignment')} alignmentType="text" value={text_align} onChange={val =>  setAttributes({ text_align: val })}  disableJustify responsive device={device}  onDeviceChange={value => this.setState({ device: value })} />
							</PanelRow>
							<PanelRow>
							<Range label={__('Content Width')} value={hero_content_width} responsive  onChange={val =>  setAttributes({ hero_content_width: val })}  min={1} max={12} device={device}  onDeviceChange={value => this.setState({ device: value })} />	
							</PanelRow>
						</PanelBody>
             

							<PanelBody title={'Separator'} initialOpen={false}>
								<SelectControl label={__('Separator Position')}  value={separator_position}
				                    options={[
				                        { label: __('Top'), value: 'top' },
				                        { label: __('Bottom'), value: 'bottom' },
				                        { label: __('Both'), value: 'both' }
				                    ]}
				                    onChange={val => setAttributes({ separator_position: val })}/>
				                    
				                {(separator_position == "top" || separator_position == "both") &&

								<SelectControl label={__('Separator Top Style')}  value={separator_top_style}
				                    options={[
				                        { label: __('None'), value: '' },
				                        { label: __('Tip Left'), value: 'row--separator-tip_left' },
				                        { label: __('Tip Right'), value: 'row--separator-tip_right' },
				                        { label: __('Tip Center'), value: 'row--separator-tip_center' },
				                        { label: __('Split Outer'), value: 'row--separator-split-outer' },
				                        { label: __('SVG'), value: 'row--separator-svg row--separator-split-inner' },
				                    ]}
				                    onChange={val => setAttributes({ separator_top_style: val })}/>
				                }
				                {(separator_position == "bottom" || separator_position == "both") &&

				                <SelectControl label={__('Separator Bottom Style')}  value={separator_bottom_style}
				                    options={[
				                        { label: __('None'), value: '' },
				                        { label: __('Tip Left'), value: 'row--separator-tip_left' },
				                        { label: __('Tip Right'), value: 'row--separator-tip_right' },
				                        { label: __('Tip Center'), value: 'row--separator-tip_center' },
				                        { label: __('Split Outer'), value: 'row--separator-split-outer' },
				                        { label: __('SVG'), value: 'row--separator-svg row--separator-split-inner' },
				                    ]}
				                    onChange={val => setAttributes({ separator_bottom_style: val })}/>
				                }				                
							</PanelBody>
							<PanelBody title={'Spacers'} initialOpen={false}>
								<SelectControl label={__('Enable Spacer')}  value={enable_spacer}
				                    options={[
				                    	{ label: __('None'), value: '' },
				                        { label: __('Top'), value: 'top' },
				                        { label: __('Bottom'), value: 'bottom' },
				                        { label: __('Both'), value: 'both' }
				                    ]}
				                    onChange={val => setAttributes({ enable_spacer: val })}/>
							</PanelBody>
						</InspectorTab>	

						<InspectorTab key='hover'>
                        </InspectorTab>		

						<InspectorTab key='advance'>
                        </InspectorTab>			
					</InspectorTabs>
				</InspectorControls>
		);
	}
 
	getBlockControls = () => {
		const { attributes:{
			

		}, setAttributes } = this.props;
 
		return (
			<BlockControls>
				<Toolbar>
				<IconButton
					label={ this.state.editMode ? "Preview" : "Edit" }
					icon={ this.state.editMode ? "format-image" : "edit" }
					onClick={() => this.setState({ editMode: !this.state.editMode })}
				/>
			</Toolbar>
			</BlockControls>
		);
	}
 
	render() {
		const {clientId, attributes:{
			uniqueId,
			bodyBg,
			text_align,
			

		}, setAttributes } = this.props;
		const { device } = this.state;
 		const { getBlockOrder } = select('core/block-editor')
        let hasChildBlocks = getBlockOrder(clientId).length > 0
		return ([
		this.getInspectorControls(),
		this.getBlockControls(),
		<div className={`hero-editor`}>
			{this.state.editMode && 
				<Fragment>
					<InnerBlocks
                    renderAppender={() => (
                        <InnerBlocks.ButtonBlockAppender />
                    )}	/>
				</Fragment>
			}
			{!this.state.editMode && 
				<ServerSideRender
					block={this.props.name}
					attributes={{ 
						uniqueId: uniqueId,  
						text_align: text_align, 
						bodyBg: bodyBg, 
					}}
				/>
			}
		</div>
	]);
	}
}


export default compose([
    withDispatch((dispatch) => {
        const {
            removeBlock,
        } = dispatch('core/block-editor');

        return {
            removeBlock,
        };
    }),
    withCSSGenerator()
])(Edit);