const { Component , Fragment} = wp.element;
const { select, withDispatch } = wp.data
const { compose } = wp.compose;
const { ServerSideRender } = wp.editor;
const { RichText,InspectorControls, BlockControls, AlignmentToolbar } = wp.blockEditor;
const { ToggleControl, PanelBody, PanelRow, CheckboxControl, SelectControl,Toolbar, IconButton,Placeholder, Disabled  } = wp.components;
const {
    Url,
    Toggle,
    Background ,
    Border,
    BorderRadius ,
    InspectorTab,
    InspectorTabs,
    Padding,
    Typography,
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
            url,
            buttonStyle,
            isCustomStyle,
            enableHover,
            buttonTypography,
            buttonBg,
            buttonBorder,
            buttonBorderRadius,
            buttonPadding,
            buttonEffects,
            buttonEffectsbg,

            buttonTypographyHover,
            buttonBgHover,
            buttonBorderHover,
            buttonBorderRadiusHover,
            buttonPaddingHover,
        },setAttributes} = this.props;

        const { device,currentTab } = this.state

        return (    
            <InspectorControls key="inspector">
                <InspectorTabs tabs={['normal','hover', 'advance']} defaultTab="normal">
                    <InspectorTab key='normal'>
                        <PanelBody  title="Basic"  initialOpen={false} >
                            <PanelRow>  
                                <Url label={__('Button URL')} value={url} onChange={(value) => setAttributes({ url: value })} />
                            </PanelRow>
                            <PanelRow>  
                                <Toggle label={__('Use Custom Style')} value={isCustomStyle} onChange={val => setAttributes({ isCustomStyle: val })} />                              
                            </PanelRow>
                            
                            <PanelRow>
                                <Toggle label={__('Enable Hover')} value={enableHover} onChange={val => setAttributes({ enableHover: val })} />
                            </PanelRow>
                        </PanelBody>
                        {isCustomStyle ? 
                        <PanelBody  title="Style"  initialOpen={false} >
                            <PanelRow>  
                                <Background
                                    label={'Background'}
                                    sources={['gradient']}
                                    value={buttonBg} onChange={val => setAttributes({ buttonBg: val })} 
                                />
                            </PanelRow>
                            <PanelRow>  
                                <Border label={__('Border')} value={buttonBorder} onChange={val => setAttributes({ buttonBorder: val })} unit={['px']}  />
                            </PanelRow>
                            <PanelRow>      
                                <BorderRadius label={__('Radius')} 
                                value={buttonBorderRadius} 
                                onChange={(value) => setAttributes({ buttonBorderRadius: value })} 
                                min={0} max={100} unit={['px', 'em', '%']} responsive device={device} onDeviceChange={value => this.setState({ device: value })} />
                                
                            </PanelRow>
                            <PanelRow>      
                            <Padding
                                label={__('Padding')}
                                value={buttonPadding}
                                min={0}
                                max={300}
                                responsive
                                device={device}
                                unit={['px', 'em', '%']}
                                onChange={val => setAttributes({ buttonPadding: val })}
                                onDeviceChange={value => this.setState({ device: value })}
                            />
                            </PanelRow> 
                        </PanelBody>
                        :
                        <PanelBody  title="Style"  initialOpen={false} >
                            <PanelRow>  
                                    <SelectControl label={__('Style')}  value={buttonStyle} options={[
                                        {'label':'None','value':''},
                                        {'label':'Primary','value':'btn-primary'},
                                        {'label':'Secondary','value':'btn-secondary'},
                                        {'label':'Success','value':'btn-success'},
                                        {'label':'Danger','value':'btn-danger'},
                                        {'label':'Warning','value':'btn-warning'},
                                        {'label':'Info','value':'btn-info'},
                                        {'label':'Light','value':'btn-light'},
                                        {'label':'Dark','value':'btn-dark'},
                                        {'label':'Link','value':'btn-link'},
                                        {'label':'Outline Primary','value':'btn-outline-primary'},
                                        {'label':'Outline Secondary','value':'btn-outline-secondary'},
                                        {'label':'Outline Success','value':'btn-outline-success'},
                                        {'label':'Outline Danger','value':'btn-outline-danger'},
                                        {'label':'Outline Warning','value':'btn-outline-warning'},
                                        {'label':'Outline Info','value':'btn-outline-info'},
                                        {'label':'Outline Light','value':'btn-outline-light'},
                                        {'label':'Outline Dark','value':'btn-outline-dark'},
                                        ]} 
                                     onChange={val => setAttributes({ buttonStyle: val })} /> 
                            </PanelRow>
                        </PanelBody>
                        }
                        <PanelBody  title="Typography"  initialOpen={false} >
                            <PanelRow>  
                                <Typography
                                    value={buttonTypography}
                                    onChange={(value) => setAttributes({buttonTypography:value})}
                                    disableLineHeight
                                    device={device}
                                    onDeviceChange={value => updateParentState('device', value)} />
                            </PanelRow>
                        </PanelBody>

                    </InspectorTab>
                   
                        <InspectorTab key='hover'>
                            <PanelBody  title="Effects"  initialOpen={false} >
                                <PanelRow>  
                                        <SelectControl label={__('Button Effects')}  value={buttonEffects} options={[
                                            {'label':'None','value':''},
                                            {'label':'Slide Top','value':'effect-slide-1 effect-side--top'},
                                            {'label':'Slide Bottom','value':'effect-slide-1 effect-side--bottom'},
                                            {'label':'Slide Left','value':'effect-slide-1 effect-side--left'},
                                            {'label':'Slide Right','value':'effect-slide-1 effect-side--right'}]} 
                                         onChange={val => setAttributes({ buttonEffects: val })} /> 
                                </PanelRow>
                                <PanelRow> 
                                 <Background
                                    label={'Effect Background'}
                                    sources={['gradient']}
                                    value={buttonEffectsbg} onChange={val => setAttributes({ buttonEffectsbg: val })} 
                                /> 
                                </PanelRow>
                            </PanelBody>
                            <PanelBody  title="Style"  initialOpen={false} >
                            <PanelRow>  
                                <Background
                                    label={'Background'}
                                    sources={['gradient']}
                                    value={buttonBgHover} onChange={val => setAttributes({ buttonBgHover: val })} 
                                />
                            </PanelRow>
                            <PanelRow>  
                                <Border label={__('Border')} value={buttonBorderHover} onChange={val => setAttributes({ buttonBorderHover: val })} unit={['px']}  />
                            </PanelRow>
                            <PanelRow>      
                                <BorderRadius label={__('Radius')} 
                                value={buttonBorderRadiusHover} 
                                onChange={(value) => setAttributes({ buttonBorderRadiusHover: value })} 
                                min={0} max={100} unit={['px', 'em', '%']} responsive device={device} onDeviceChange={value => this.setState({ device: value })} />
                                
                            </PanelRow>
                            <PanelRow>      
                            <Padding
                                label={__('Padding')}
                                value={buttonPaddingHover}
                                min={0}
                                max={300}
                                responsive
                                device={device}
                                unit={['px', 'em', '%']}
                                onChange={val => setAttributes({ buttonPaddingHover: val })}
                                onDeviceChange={value => this.setState({ device: value })}
                            />
                            </PanelRow> 
                        </PanelBody>
                         <PanelBody  title="Typography"  initialOpen={false} >
                            <PanelRow>  
                                <Typography
                                    value={buttonTypographyHover}
                                    onChange={(value) => setAttributes({buttonTypographyHover:value})}
                                    disableLineHeight
                                    device={device}
                                    onDeviceChange={value => updateParentState('device', value)} />
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

    render (){
        const {clientId, attributes:{
            uniqueId,
            buttonText,  
            buttonEffects,   
            buttonStyle,   
            isCustomStyle,   

        }, setAttributes } = this.props;


        let bs = (isCustomStyle) ? buttonStyle : "";

        const { device,selectedItem } = this.state;
        const { getBlockOrder } = select('core/block-editor')
        let hasChildBlocks = getBlockOrder(clientId).length > 0
        return ([
        this.getInspectorControls(),
        this.getBlockControls(),
        <div className={`d-inline-flex`}>
            {this.state.editMode && 
                <Fragment>
                    <RichText
                        tagName="a" 
                        value={ buttonText } 
                        className={`btn ${bs} wprig-block-${uniqueId} ${buttonEffects}`}
                        allowedFormats={ [ 'core/bold', 'core/italic' ] } 
                        onChange={ ( val ) => setAttributes(  {buttonText:val}  ) } 
                        placeholder={ __( 'Label...' ) } 
                    />
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