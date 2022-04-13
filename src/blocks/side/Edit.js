import classnames from 'classnames';

const { Fragment,Component ,createRef} = wp.element
const { __ } = wp.i18n;
const {
	InnerBlocks,
	BlockControls,
	InspectorControls
} = wp.blockEditor;
const { compose } = wp.compose;
const { getBlockContent } = wp.blocks;
const { ServerSideRender } = wp.editor;


  
const {
	PanelBody,
	PanelRow,
	SelectControl,
	RangeControl,
	Tooltip,
	IconButton,
	Toolbar,
} = wp.components;

const {
	Background,
	Border,
	BorderRadius,
	BoxShadow,	
	InspectorTab,
	InspectorTabs,
	Range,
	Padding,
	Separator,
    
	Select,
	Toggle,
	withCSSGenerator,
	globalSettings: {
		globalSettingsPanel,
		animationSettings,
		interactionSettings
	}
} = wp.wprigComponents

class Edit extends Component {
    constructor(props) {
		super(props)
		this.state = {
			editMode: true,
			device: 'md'
		}
		this.wprigContextMenu = createRef();
	}

    componentDidMount() {
		const {
			block,
			clientId,
			setAttributes,
			updateBlockAttributes,
			attributes: {
				uniqueId
			}
		} = this.props;

		const _client = clientId.substr(0, 6);

		if (!uniqueId || uniqueId=="") {
			setAttributes({ uniqueId: _client });
		} else if (uniqueId && uniqueId != _client) {
			// setAttributes({ uniqueId: _client });
		}

		

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

        const {
			setAttributes,
			clientId ,
			attributes: {
                uniqueId,
				className,
				customClassName,
				faceClass,
				staticClass,
				flexDirection,
				justifyContent,
				alignItems,
				innerClass,
				bodyBg,
				bodyPadding,
				enableOverlay,
				overlay,
				opacity,
				blend,
				border,
				borderRadius,
				faceShadow,
				rowHeight,
				heightOptions,
                //global
                animation,
				globalCss,
				hideTablet,
				hideMobile,
				interaction,
				globalZindex,
				positionXaxis,
				positionYaxis,
				enablePosition,
				selectPosition
			}
		} = this.props;
		
		const { device } = this.state;
		        
        const blockWrapperClasses = classnames(
			{ [`wprig-block-${uniqueId}`]: typeof uniqueId !== 'undefined' },
			{ [className]: typeof className !== 'undefined' }
		)

		     

        return (
            <Fragment>
                <InspectorControls key="inspector">
                    <InspectorTabs tabs={['style', 'advance']}>
                        <InspectorTab key={'style'}>        
                        <PanelBody initialOpen={false} title={__('Layout')}>
                            <PanelRow>      
                            	<SelectControl label={__('Flex Direction')}  value={flexDirection} options={[
				                    	{'label':'Column','value':'flex-column'},
				                    	{'label':'Row','value':''},
				                    	{'label':'Column Reverse','value':'flex-column-reverse'},
				                    	{'label':'Row Reverse','value':'flex-row-reverse'},
				                    	]} 
				                     onChange={val => setAttributes({ flexDirection: val })}/>
                            </PanelRow>    
                            <PanelRow>      
                            	<SelectControl label={__('Justify Content')}  value={justifyContent} options={[
				                    	{'label':'Center','value':'justify-content-center'},
				                    	{'label':'Start','value':'justify-content-start'},
				                    	{'label':'End','value':'justify-content-end'},
				                    	{'label':'Space Around','value':'justify-content-around'},
				                    	{'label':'Space Between','value':'justify-content-between'},
				                    	{'label':'Space Evenly','value':'justify-content-evenly'},
				                    	]} 
				                     onChange={val => setAttributes({ justifyContent: val })}/>
                            </PanelRow>  
                            <PanelRow>      
                            	<SelectControl label={__('Align Content')}  value={alignItems} options={[
				                    	{'label':'Center','value':'align-content-center'},
				                    	{'label':'Start','value':'align-content-start'},
				                    	{'label':'End','value':'align-content-end'},
				                    	{'label':'Space Around','value':'align-content-around'},
				                    	{'label':'Space Between','value':'align-content-between'},
				                    	{'label':'Space Evenly','value':'align-content-evenly'},
				                    	]} 
				                     onChange={val => setAttributes({ alignItems: val })}/>
                            </PanelRow>
                        </PanelBody>                        
                        <PanelBody initialOpen={false} title={__('Style')}>
                            <PanelRow>      
                        	<Background
                                    parallax
                                    value={bodyBg}
                                    label={__('Background')}
                                    externalImage
                                    sources={['image', 'gradient']}
                                    onChange={val => setAttributes({ bodyBg: val })}
                                />
                            </PanelRow>      
                            <PanelRow>      
                            <Padding
                                label={__('Padding')}
                                value={bodyPadding}
                                min={0}
                                max={300}
                                responsive
                                device={device}
                                unit={['px', 'em', '%']}
                                onChange={val => setAttributes({ bodyPadding: val })}
                                onDeviceChange={value => this.setState({ device: value })}
                            />
                            </PanelRow> 
                        </PanelBody>                        
                        </InspectorTab>
                        <InspectorTab key={'advance'}>
							{animationSettings(uniqueId, animation, setAttributes)}
							{interactionSettings(uniqueId, interaction, setAttributes)}
						</InspectorTab>
                    </InspectorTabs>
                </InspectorControls>
            {globalSettingsPanel(enablePosition, selectPosition, positionXaxis, positionYaxis, globalZindex, hideTablet, hideMobile, globalCss, setAttributes)}
            {this.getBlockControls()}
            {this.state.editMode && 
            	<Fragment>
		            <div className={`${blockWrapperClasses} wp-block-face d-flex  ${customClassName} ${flexDirection} ${justifyContent} ${alignItems}`}>
		            	  <InnerBlocks
		                    templateLock={false}
		                    templateInsertUpdatesSelection={false}
		                    renderAppender={() => (
		                        <InnerBlocks.ButtonBlockAppender />
		                    )}
		                />
		            </div>
            </Fragment>
        	}
        	{!this.state.editMode && 
        		<ServerSideRender
                    block={this.props.name}
                    attributes={{ 
                        uniqueId: uniqueId,
                        faceClass: faceClass,
                        editMode: this.state.editMode,
                    }}
                />
        	}
            </Fragment>
        )
    }
}
export default Edit

// export default compose([
//     withDispatch((dispatch) => {
//         const {
//             removeBlock,
//         } = dispatch('core/block-editor');

//         return {
//             removeBlock,
//         };
//     }),
//     withCSSGenerator()
// ])(Edit);