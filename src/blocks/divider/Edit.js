const { Component , Fragment} = wp.element;
const { select, withDispatch } = wp.data
const { compose } = wp.compose;
const { ServerSideRender } = wp.editor;
const { RichText,InspectorControls, BlockControls, AlignmentToolbar } = wp.blockEditor;
const { ToggleControl, PanelBody, PanelRow, CheckboxControl, SelectControl,Toolbar, IconButton,Placeholder, Disabled  } = wp.components;
const {
	Alignment,
	Background,
	Border,
	BorderRadius ,
	NumberField,
	IconSelectorSVG,
	RadioAdvanced,
	ColorAdvanced,
	InspectorTab,
	InspectorTabs,
	InspectorSections,
	Range,
	Toggle,
	Typography,
	Padding,
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
            selectedItem: -1,
            iconLists: []
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
			enable_text,
			separator_text_typography,
			enable_icon,
			content_alignment,
			separator_icon_style,
			separator_layout,
			separator_number,
			separator_border,
			enable_left_separator,
			enable_right_separator,
			left_separator_width,
			right_separator_width,
			separator_width,
			separator_height,
			separator_icon_bg,
			separator_icon_border,
			separator_icon_padding,
			separator_icon_border_radius,

			enable_hover_effect,
			enable_text_sub,
			separator_text_sub,
			enable_icon_sub,
			separator_icon_style_sub,
			separator_text_typography_sub,
			separator_icon_bg_sub,
			separator_icon_border_sub,
			separator_icon_border_radius_sub,
			animate_view_max_height,
			hover_effects
		}, setAttributes } = this.props;

		const { device,currentTab } = this.state
 
		return (	
			<InspectorControls key="inspector">
				<InspectorTabs tabs={['normal','hover', 'advance']} defaultTab="normal">
				
					<InspectorTab key='normal'>
						
						<PanelBody 	title="Content"	initialOpen={false}	>
							<PanelRow>	
								<Alignment label={__('Content Alignment')} alignmentType="content" value={content_alignment} onChange={val =>  setAttributes({ content_alignment: val })}  disableJustify responsive device={device}  onDeviceChange={value => this.setState({ device: value })} />
							</PanelRow>	
							<PanelRow>	
								<Toggle label={__('Enable Icon')} value={enable_icon} onChange={val => setAttributes({ enable_icon: val })} />								
							</PanelRow>
							<PanelRow>	
								<Toggle label={__('Enable Text')} value={enable_text} onChange={val => setAttributes({ enable_text: val })} />								
							</PanelRow>
						
							<PanelRow>	
							<Range label={__('Width')} value={separator_width}  onChange={val =>  setAttributes({ separator_width: val })}  min={0} max={100} />
							</PanelRow>	

							</PanelBody>
					{enable_icon &&
							<PanelBody 	title="Icon"	initialOpen={false}	>
								<PanelRow>	
								<IconSelectorSVG
                                            label="Icon"
                                            value={separator_icon_style}
                                            enableSearch
                                            onChange={(val) => { 
                                            	setAttributes({ separator_icon_style: val })
                                            }}
                                        />                                 
							</PanelRow>
						</PanelBody>
					}
					{enable_text &&
						<PanelBody 	title="Typography"	initialOpen={false}	>
							<PanelRow>	
								<Typography
			                        value={separator_text_typography}
			                        onChange={(value) => setAttributes({separator_text_typography:value})}
			                        disableLineHeight
			                        device={device}
			                        onDeviceChange={value => updateParentState('device', value)} />
							</PanelRow>
						</PanelBody>
					}
						<PanelBody 	title="Separator"	initialOpen={false}	>
						
							<PanelRow>
								<SelectControl label={__('Layout')}  value={separator_layout} options={[
				                    	{'label':'Layout 1','value':'align-items-center justify-content-between'},
				                    	{'label':'Layout 2','value':'flex-row-reverse align-items-center justify-content-between'},
				                    	{'label':'Layout 3','value':'flex-column align-items-center'},
				                    	{'label':'Layout 4','value':'flex-column align-items-start'},
				                    	{'label':'Layout 5','value':'flex-column align-items-end'},
				                    	{'label':'Layout 6','value':'flex-column-reverse align-items-center'},
				                    	{'label':'Layout 7','value':'flex-column-reverse align-items-start'},
				                    	{'label':'Layout 8','value':'flex-column-reverse align-items-end'},
				                    	]} 
				                     onChange={val => setAttributes({ separator_layout: val })}/>
				            </PanelRow>
				       
							<PanelRow>	
								<Background
                                    label={'Background'}
                                    sources={['image', 'gradient']}
                                    value={separator_icon_bg} onChange={val => setAttributes({ separator_icon_bg: val })} 
                                />
							</PanelRow>
							<PanelRow>	
								<Border label={__('Border')} value={separator_icon_border} onChange={val => setAttributes({ separator_icon_border: val })} unit={['px']}  />
								
							</PanelRow>		
							<PanelRow>	
								<NumberField label={__('Animate Max Height')} value={animate_view_max_height}  onChange={(val) => setAttributes({animate_view_max_height:val})}   min={0} max={500} />  
							</PanelRow>
							<PanelRow>		
								<Padding
											label={__('Padding')}
											value={separator_icon_padding}
											min={0}
											max={300}
											responsive
											device={device}
											unit={['px', 'em', '%']}
											onChange={val => setAttributes({ separator_icon_padding: val })}
											onDeviceChange={value => this.setState({ device: value })}
										/>
							</PanelRow>		
							<PanelRow>		
								<BorderRadius label={__('Radius')} value={separator_icon_border_radius} onChange={(value) => setAttributes({ separator_icon_border_radius: value })} min={0} max={100} unit={['px', 'em', '%']} responsive device={device} onDeviceChange={value => this.setState({ device: value })} />
								
							</PanelRow>	
						</PanelBody>
						<PanelBody 	title="Divider"	initialOpen={false}	>
							<PanelRow>	
								<NumberField label={__('Numbers')} value={separator_number}  onChange={(val) => setAttributes({separator_number:val})}   min={0} max={50} />  
							</PanelRow>	
							<PanelRow>	
								<NumberField label={__('Separator Gap')} value={separator_height}  onChange={(val) => setAttributes({separator_height:val})}   min={0} max={5} />  
							</PanelRow>	
							<PanelRow>	
							<Border label={__('Border')} value={separator_border} onChange={val => setAttributes({ separator_border: val })} unit={['px']}  />
								
							</PanelRow>	
							<PanelRow>	
								<Toggle label={__('Enable Left Separator')} value={enable_left_separator} onChange={val => setAttributes({ enable_left_separator: val })} />								
							</PanelRow>
							<PanelRow>	
								<Toggle label={__('Enable Right Separator')} value={enable_right_separator} onChange={val => setAttributes({ enable_right_separator: val })} />								
							</PanelRow>		
						</PanelBody>
						<PanelBody 	title="Separator Width"	initialOpen={false}	>
							{enable_left_separator == 1 &&
									<Fragment>
										<Range label={__('Left Separator Width')} value={left_separator_width}  onChange={val =>  setAttributes({ left_separator_width: val })}  min={0} max={100} />	
									</Fragment>
								}

							{enable_right_separator == 1 &&
									<Fragment>
										<Range label={__('Right Separator Width')} value={right_separator_width}  onChange={val =>  setAttributes({ right_separator_width: val })}  min={0} max={100} />	
									</Fragment>
								}
						</PanelBody>
						</InspectorTab>	

						<InspectorTab key='hover'>
						
						<PanelBody 	title="Content"	initialOpen={false}	>
							<PanelRow>	
								<Toggle label={__('Enable Hover Effects')} value={enable_hover_effect} onChange={val => setAttributes({ enable_hover_effect: val })} />								
							</PanelRow>

							{enable_hover_effect && <Fragment>
							<PanelRow>				                     
			                    <SelectControl label={__('Hover effects')}  value={hover_effects} options={[
			                    	{'label':'None','value':''},
			                    	{'label':'Push Top','value':'animate-push-top'},
			                    	{'label':'Push Left','value':'animate-push-left'},
			                    	{'label':'Push Right','value':'animate-push-right'},
			                    	{'label':'Push Bottom','value':'animate-push-bottom'},
			                    	]} 
			                     onChange={val => setAttributes({ hover_effects: val })}/>
				            </PanelRow>
							<PanelRow>	
								<Toggle label={__('Enable Icon')} value={enable_icon_sub} onChange={val => setAttributes({ enable_icon_sub: val })} />								
							</PanelRow>
							<PanelRow>	
								<Toggle label={__('Enable Text')} value={enable_text_sub} onChange={val => setAttributes({ enable_text_sub: val })} />								
							</PanelRow>
							</Fragment>
						}

						</PanelBody>
						{enable_icon_sub &&
							<PanelBody 	title="Icon"	initialOpen={false}	>
								<PanelRow>	
									<IconSelectorSVG
	                                            label="Icon"
	                                            value={separator_icon_style_sub}
	                                            enableSearch
	                                            onChange={(val) => { 
	                                            	setAttributes({ separator_icon_style_sub: val })
	                                            }}
	                                        />                                 
								</PanelRow>
							</PanelBody>
						}
						{enable_text_sub &&
							<PanelBody 	title="Typography"	initialOpen={false}	>
								<PanelRow>	
									<RichText
							                tagName="p" 
							                value={ separator_text_sub } 
							                allowedFormats={ [ 'core/bold', 'core/italic' ] } 
							                onChange={ ( val ) => setAttributes(  {separator_text_sub:val}  ) } 
							                placeholder={ __( 'Label...' ) } 
							            />
								</PanelRow>	
								<PanelRow>	
									<Typography
				                        value={separator_icon_style}
				                        onChange={(value) => setAttributes({separator_icon_style:value})}
				                        disableLineHeight
				                        device={device}
				                        onDeviceChange={value => updateParentState('device', value)} />
								</PanelRow>
							</PanelBody>
						}
							<PanelBody 	title="Separator"	initialOpen={false}	>
								<PanelRow>	
									<Background
	                                    label={'Background'}
	                                    sources={['image', 'gradient']}
	                                    value={separator_icon_bg_sub} onChange={val => setAttributes({ separator_icon_bg_sub: val })} 
	                                />
								</PanelRow>
								<PanelRow>	
									<Border label={__('Border')} value={separator_icon_border_sub} onChange={val => setAttributes({ separator_icon_border_sub: val })} unit={['px']}  />
									
								</PanelRow>			
								<PanelRow>		
									<BorderRadius label={__('Radius')} value={separator_icon_border_radius_sub} onChange={(value) => setAttributes({ separator_icon_border_radius_sub: value })} min={0} max={100} unit={['px', 'em', '%']} responsive device={device} onDeviceChange={value => this.setState({ device: value })} />									
								</PanelRow>	
							</PanelBody>
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


	printSeparators = (num) => {
		var a = [];
		return(
			Array(parseInt(num)).fill(0).map((index,i)=>{				
				return(<span></span>)
			}))
	}


	render() {
		const {clientId, attributes:{
			uniqueId,
			enable_text,
			enable_icon,
			separator_layout,
			separator_text,
			separator_icon_style,
			separator_number,
			enable_left_separator,
			enable_right_separator,
			content_alignment		,
			enable_hover_effect,
			enable_icon_sub,
			enable_text_sub,
			separator_icon_style_sub,	
			separator_text_sub,
			hover_effects	

		}, setAttributes } = this.props;

		const { device,selectedItem } = this.state;
 		const { getBlockOrder } = select('core/block-editor')
        let hasChildBlocks = getBlockOrder(clientId).length > 0
		return ([
		this.getInspectorControls(),
		this.getBlockControls(),
		<div className={`divider-editor`}>
			{this.state.editMode && 
				<Fragment>
					<div className={`adv-divider-wrap divider-2 wprig-block-${uniqueId} ${enable_hover_effect ? hover_effects : ''}`}>

			            <div className={`adv-divider adv-divider-align--${content_alignment.md}  ${enable_left_separator ? '' : 'adv-divider--disable_left'} ${enable_right_separator ? '' : 'adv-divider--disable_right'} `}>
			                <div className={`adv-divider--line adv-divider--left`}>
			                	{this.printSeparators(separator_number)}
			                </div>
			                <div className={`adv-divider--separator yani-transition`}>
			                	<div className={`animate-item`}>
			                		<div className={`primary yani-transition `}>
			                			<div className={`d-flex ${separator_layout}`}>

			                			{enable_icon && 
						                    <svg>
						                        <use xlinkHref={`${wprig_admin.plugin}assets/img/admin/font-awesome/${separator_icon_style.icon_type}.svg#${separator_icon_style.icon}`}></use>
						                    </svg>                            
						                	}
						                {enable_text && 
						                		<RichText
									                tagName="p" 
									                value={ separator_text } 
									                allowedFormats={ [ 'core/bold', 'core/italic' ] } 
									                onChange={ ( val ) => setAttributes(  {separator_text:val}  ) } 
									                placeholder={ __( 'Label...' ) } 
									            />
						                	}
			                			</div>
			                		</div>
			                		{enable_hover_effect && 
			                		<div className={`secondary yani-transition`}>
			                			<div className={`d-flex ${separator_layout}`}>
			                			{enable_icon_sub && 
						                    <svg>
						                        <use xlinkHref={`${wprig_admin.plugin}assets/img/admin/font-awesome/${separator_icon_style_sub.icon_type}.svg#${separator_icon_style_sub.icon}`}></use>
						                    </svg>                            
						                	}
						                {enable_text_sub && 
						                		<RichText
									                tagName="p" 
									                value={ separator_text_sub } 
									                allowedFormats={ [ 'core/bold', 'core/italic' ] } 
									                onChange={ ( val ) => setAttributes(  {separator_text_sub:val}  ) } 
									                placeholder={ __( 'Label...' ) } 
									            />
						                	}
			                			</div>
			                		</div>
			                		}
			                	</div>
			                	
			                </div>
			                <div className={`adv-divider--line adv-divider--right`}>
			                    {this.printSeparators(separator_number)}
			                </div>
			            </div>
			        </div>
				</Fragment>
			}
			{!this.state.editMode && 
				<ServerSideRender
					block={this.props.name}
					attributes={{ 
						uniqueId: uniqueId
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