import classnames from 'classnames';

const { __ } = wp.i18n;
const {
	Toolbar,
	Tooltip,
	PanelBody
} = wp.components;

const { compose } = wp.compose;

const {
	withSelect,
	withDispatch
} = wp.data;

const {
	Fragment,
	Component,
} = wp.element;

const {
	RichText,
	InnerBlocks,
	BlockControls,
	InspectorControls
} = wp.blockEditor;

const {
	Select,
	IconList,
	Alignment,
	Separator,
	InspectorTab,
	InspectorTabs,
	withCSSGenerator,
	Inline: {
		InlineToolbar
	},
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
			spacer: true,
			device: 'md',
			activeTab: 1,
			initialRender: true,
			showIconPicker: false,
		}
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

		if (!uniqueId) {
			setAttributes({ uniqueId: _client });
		} else if (uniqueId && uniqueId != _client) {
			setAttributes({ uniqueId: _client });
		}
	}

	updateTitles = (value, index) => {
		const { attributes: { tabTitles }, setAttributes } = this.props;
		const modifiedTitles = tabTitles.map((title, thisIndex) => {
			if (index === thisIndex) {
				title = { ...title, ...value }
			}
			return title
		})
		setAttributes({ tabTitles: modifiedTitles })
	}

	renderTabTitles = () => {
		const {
			activeTab,
			showIconPicker
		} = this.state;

		const {
			attributes: {
				tabTitles,
				iconPosition
			}
		} = this.props;

		const changeActiveTab = (index) => {
			this.setState({
				initialRender: false,
				activeTab: index + 1,
				showIconPicker: !showIconPicker
			});
		}

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
				const titleClasses = classnames(
					'wprig-tab-title',
					{ [`wprig-has-icon-${iconPosition}`]: typeof title.iconName !== 'undefined' }
				)
				return (
					<div className={wrapperClasses}>
						<div
							role="button"
							className={titleClasses}
							onClick={() => changeActiveTab(index)}
						>
							{title.iconName && (iconPosition == 'top' || iconPosition == 'left') && (<i className={`wprig-tab-icon ${title.iconName}`} />)}
							{
								isActiveTab ?

									<RichText
										value={title.title}
										keepPlaceholderOnFocus
										placeholder={__('Add Tab Title')}
										onChange={value => this.updateTitles({ title: value }, index)}
									/>
									:
									<div>{title.title}</div>
							}
							{title.iconName && (iconPosition == 'right') && (<i className={`wprig-tab-icon ${title.iconName}`} />)}
						</div>
						<Tooltip text={__('Delete this tab')}>
							<span className="wprig-action-tab-remove" role="button" onClick={() => this.deleteTab(index)}>
								<i className="fas fa-times" />
							</span>
						</Tooltip>
					</div>
				)
			}
			));
	}

	deleteTab = (tabIndex) => {
		const { activeTab } = this.state;
		const {
			block,
			clientId,
			setAttributes,
			replaceInnerBlocks,
			updateBlockAttributes,
			attributes: {
				tabs,
				tabTitles
			}
		} = this.props;

		const newItems = tabTitles.filter((item, index) => index != tabIndex);
		let i = tabIndex + 1;

		setAttributes({
			tabTitles: newItems,
			tabs: tabs - 1
		});

		while (i < tabs) {
			updateBlockAttributes(block.innerBlocks[i].clientId,
				Object.assign(block.innerBlocks[i].attributes, {
					id: block.innerBlocks[i].attributes.id - 1
				}));
			i++;
		}

		let innerBlocks = JSON.parse(JSON.stringify(block.innerBlocks));
		innerBlocks.splice(tabIndex, 1);

		replaceInnerBlocks(clientId, innerBlocks, false);

		this.setState(state => {
			let newActiveTab = state.activeTab - 1;
			if (tabIndex + 1 === activeTab) {
				newActiveTab = tabIndex == 0 ? 1 : tabIndex + 1 < tabs ? tabIndex + 1 : tabIndex
			}
			return {
				activeTab: newActiveTab,
				initialRender: false
			}
		});

	}

	render() {
		const {
			setAttributes,
			attributes: {
				uniqueId,
				className,
				

				tabs,
				tabStyle,
				tabTitles,
				navAlignment,
				iconPosition,

				//animation
				animation,
				//global
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

		const {
			device,
			activeTab
		} = this.state;


		const newTitles = () => {
			let newTitles = JSON.parse(JSON.stringify(tabTitles));
			newTitles[tabs] = {
				title: __(`Tab ${tabs + 1}`),
				icon: {},
			}
			return newTitles;
		}

		const addNewTab = () => {
			this.setState({
				activeTab: tabs + 1,
				initialRender: false
			});
			setAttributes({
				tabs: tabs + 1,
				tabTitles: newTitles()
			});
		}

		const blockWrapperClasses = classnames(
			{ [`wprig-block-${uniqueId}`]: typeof uniqueId !== 'undefined' },
			{ [className]: typeof className !== 'undefined' }
		)

		return (
			<Fragment>
				<InspectorControls key="inspector">
					<InspectorTabs tabs={['style', 'advance']}>
						<InspectorTab key={'style'}>
							<PanelBody title={__('Styles')} initialOpen={true}>
								
								<Separator />
								<Alignment label={__('Alignment')} value={navAlignment} alignmentType="content" onChange={val => setAttributes({ navAlignment: val })} disableJustify />
							</PanelBody>

							<PanelBody title={__('Icon')} initialOpen={false}>

								<IconList
									label={__('Icon')}
									value={tabTitles[activeTab - 1] && tabTitles[activeTab - 1].iconName}
									onChange={(value) => this.updateTitles({ iconName: value }, activeTab - 1)} />
								<Select
									label={__('Icon Position')}
									options={[['left', __('Left')], ['right', __('Right')], ['top', __('Top')]]}
									value={iconPosition}
									onChange={(value) => setAttributes({ iconPosition: value })} />

							</PanelBody>
							
						</InspectorTab>
						<InspectorTab key={'advance'}>
							{animationSettings(uniqueId, animation, setAttributes)}
							{interactionSettings(uniqueId, interaction, setAttributes)}
						</InspectorTab>
					</InspectorTabs>

				</InspectorControls>

				<BlockControls>
					<Toolbar>
						<InlineToolbar
							data={[{ name: 'InlineSpacer', key: 'spacer', responsive: true, unit: ['px', 'em', '%'] }]}
							{...this.props}
							prevState={this.state}
						/>
					</Toolbar>
				</BlockControls>

				{globalSettingsPanel(enablePosition, selectPosition, positionXaxis, positionYaxis, globalZindex, hideTablet, hideMobile, globalCss, setAttributes)}

				<div className={blockWrapperClasses}>
					<div className={`wprig-block-tab wprig-tab-style-${tabStyle} wprig-active-tab-${activeTab}`}>

						<div className={`wprig-tab-nav wprig-alignment-${navAlignment}`}>

							{this.renderTabTitles()}

							<Tooltip text={__('Add new tab')}>
								<span
									role="button"
									areaLabel={__('Add new tab')}
									className="wprig-add-new-tab"
									onClick={() => addNewTab()}
								>
									<i className="fas fa-plus-circle" />
								</span>
							</Tooltip>
						</div>

						<div className={`wprig-tab-body`}>
							<InnerBlocks
								tagName="div"
								templateLock='all'
								allowedBlocks={['wprig/tab']}
								template={
									Array(tabs).fill(0).map((_, tabIndex) => (
										['wprig/tab',
											{
												id: tabIndex + 1,
												...(tabIndex === 0 && { customClassName: 'wprig-active' })
											}
										])
									)}
							/>
						</div>
					</div>
				</div>

			</Fragment>
		)
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
