const { Component , Fragment} = wp.element;
const { select, withDispatch } = wp.data
const { compose } = wp.compose;
const { ServerSideRender } = wp.editor;
const { RichText,InspectorControls, BlockControls, AlignmentToolbar } = wp.blockEditor;
const { ToggleControl, PanelBody, PanelRow, CheckboxControl, SelectControl,Toolbar, IconButton,Placeholder, Disabled  } = wp.components;
const {
    InspectorTab,
    InspectorTabs,
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
        const { attributes:{},setAttributes} = this.props;

        const { device,currentTab } = this.state

        return (    
            <InspectorControls key="inspector">
                <InspectorTabs tabs={['normal','hover', 'advance']} defaultTab="normal">
                    <InspectorTab key='normal'>
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

    render (){
        const {clientId, attributes:{
            uniqueId,           

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
                    Your Awesome Buttons will be shown here
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