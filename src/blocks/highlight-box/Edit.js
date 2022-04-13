import classnames from 'classnames';
const { Component , Fragment} = wp.element;
const { select,withSelect, withDispatch } = wp.data
const { compose } = wp.compose;
const { ServerSideRender } = wp.editor;
const { RichText,InnerBlocks,InspectorControls, BlockControls, AlignmentToolbar } = wp.blockEditor;
const {  PanelBody, PanelRow, CheckboxControl, SelectControl,Toolbar, IconButton,Placeholder, Disabled  } = wp.components;
const {
    BorderRadius ,
    InspectorTab,
    InspectorTabs,
    Tabs,
    Toggle,
    Url,
    withCSSGenerator,
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
            initialRender: true,
            tabTitles:["Primary","Secondary"],
            fclasses:["primary","secondary"],
            activeTab: 1,
            iconLists: []
        }
    }

    componentDidMount() {
        const { setAttributes,updateBlockAttributes, clientId, attributes: { uniqueId } } = this.props
        const _client = clientId.substr(0, 6)
        if (!uniqueId) {
            setAttributes({ uniqueId: _client });
        } else if (uniqueId && uniqueId != _client) {
            // setAttributes({ uniqueId: _client });
        }    
    }

    getInspectorControls = () => {
        const { attributes:{
        	hoverEffects,
        	overlayEffects,
        	isStatic ,
        	isLink ,
        	url ,
        	openNewTab ,
        },setAttributes} = this.props;

        const { device,currentTab } = this.state

        return (    
            <InspectorControls key="inspector">
                <InspectorTabs tabs={['normal','hover', 'advance']} defaultTab="normal">
                    <InspectorTab key='normal'>
                    	<PanelBody title={'Basic'} initialOpen={false}>
                    		<PanelRow>	
								<Toggle label={__('isLink')} value={isLink} onChange={val => setAttributes({ isLink: val })} />								
							</PanelRow>
							{isLink &&
								<Fragment>
									<PanelRow>  
		                                <Url label={__('URL')} value={url} onChange={(value) => setAttributes({ url: value })} />
		                            </PanelRow>
		                            <PanelRow>	
										<Toggle label={__('Open in new Tab')} value={openNewTab} onChange={val => setAttributes({ openNewTab: val })} />								
									</PanelRow>
								</Fragment>
							}
						</PanelBody>
                    	<PanelBody title={'Effects'} initialOpen={false}>
								<SelectControl label={__('Effect')}  value={hoverEffects}
				                    options={[
				                        { label: __('None'), value: '' },
				                        { label: __('Push out Left'), value: 'effect-push-out-left' },
				                        { label: __('Push out Right'), value: 'effect-push-out-right' },
				                        { label: __('Push out Top'), value: 'effect-push-out-top' },
				                        { label: __('Push out Down'), value: 'effect-push-out-down' },
				                    ]}
				                    onChange={val => setAttributes({ hoverEffects: val })}/>
				                <SelectControl label={__('Overlay Effects')}  value={overlayEffects}
				                    options={[
				                        { label: __('None'), value: '' },
				                        { label: __('Slide Left'), value: 'effect-side--left' },
				                        { label: __('Slide Right'), value: 'effect-side--right' },
				                        { label: __('Slide Top'), value: 'effect-side--top' },
				                        { label: __('Slide Down'), value: 'effect-side--down' },
				                    ]}
				                    onChange={val => setAttributes({ overlayEffects: val })}/>				                    	
								<PanelRow>	
									<Toggle label={__('Enable Static Side')} value={isStatic} onChange={val => setAttributes({ isStatic: val })} />								
								</PanelRow>
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

    changeActiveTab = (index) => {
    	const {
			activeTab,
			tabTitles,
		} = this.state;
    	const {
			block,
			updateBlockAttributes,
			attributes: {
				iconPosition
			}
		} = this.props;

			this.setState({
				initialRender: false,
				activeTab: index + 1
			});


	}

    renderTabTitles = () => {
		const {
			activeTab,
			tabTitles,
			showIconPicker
		} = this.state;

		const {
			block,
			updateBlockAttributes,
			attributes: {
				iconPosition
			}
		} = this.props;

		

		return (
			tabTitles.map((title, index) => {
				let isActiveTab = false;
				
				if (activeTab === index + 1) {
					isActiveTab = true;
				}
				const wrapperClasses = classnames(
					'wprig-tab-item',
					{ ['wprig-active']: isActiveTab }
				)

				const btnClasses = classnames(
					'',
					{ ['btn-primary']: isActiveTab }
				)

				const titleClasses = classnames(
					'',
					{ [`wprig-has-icon-${iconPosition}`]: typeof title.iconName !== 'undefined' }
				)
				return (
					<div className={wrapperClasses}>
						<a href="#"
							role="button"
							className={`btn btn-sm ${titleClasses} ${btnClasses}`}
							onClick={() => {this.changeActiveTab(index)}}
						>	
							<div>{title}</div> 
						</a>
						{/* <Tooltip text={__('Delete this tab')}>
							<span className="wprig-action-tab-remove" role="button" onClick={() => this.deleteTab(index)}>
								<i className="fas fa-times" />
							</span>
						</Tooltip> */}
					</div>
				)
			}
			));
	}
	renderTabContent = () => {
		const { activeTab } = this.state;
		this.setState(state => {
			initialRender:true
		})
		return (
		Array(2).fill(0).map((_, tabIndex) => (
				['yani/face',
					{
						id: tabIndex + 1,
						...((tabIndex +1)=== activeTab && { customClassName: 'wprig-active' })
					}
				])
			))
	}

    render (){
        const {clientId, attributes:{ 
        	hoverEffects,
        	uniqueId,
        	isStatic
        }, setAttributes } = this.props;

        const { device,selectedItem,activeTab ,fclasses} = this.state;
        const { getBlockOrder } = select('core/block-editor')
        let hasChildBlocks = getBlockOrder(clientId).length > 0
        return ([
        this.getInspectorControls(),
        this.getBlockControls(),
        <div className={`d-flex flex-column`}>
            {this.state.editMode && 
                <Fragment>
                	<div className={`d-flex`}>
                		{this.renderTabTitles()}
                	</div>
                	<div className={`wprig-highlight-box-body d-flex flex-column wprig-active-tab-${activeTab}`}>
		           <InnerBlocks
						tagName="div"
						templateLock='all'
						allowedBlocks={['yani/side']}

						template={Array(2).fill(0).map((_, tabIndex) => (
							['yani/side',
								{
									id: tabIndex + 1,
									faceClass:fclasses[tabIndex],
									...((tabIndex +1)=== 0 && { customClassName: 'wprig-active' })
								}
							])
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
                        editMode: this.state.editMode,
                    }}
                />
            }
        </div>
    ]);
    }
}
export default compose([
	withSelect((select, ownProps) => {
		const { clientId } = ownProps;
		const { getBlock } = select('core/block-editor');
		return {
			block: getBlock(clientId)
		};
	}),
	withDispatch((dispatch) => {
		const {
			getBlocks,
			insertBlock,
			removeBlock,
			replaceInnerBlocks,
			updateBlockAttributes
		} = dispatch('core/block-editor');

		return {
			getBlocks,
			insertBlock,
			removeBlock,
			replaceInnerBlocks,
			updateBlockAttributes
		};
	}),
	withCSSGenerator()
])(Edit);