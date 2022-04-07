const { Component } = wp.element
const { RichText,InnerBlocks } = wp.blockEditor;
class Save extends Component {
	render() {
		const { attributes } = this.props;
		const alignmentClass = (attributes.textAlignment != null) ? 'has-text-align-' + attributes.textAlignment : '';
		
		return (
			<div>
				 <InnerBlocks.Content />
			</div>
		);
	}
}
export default Save