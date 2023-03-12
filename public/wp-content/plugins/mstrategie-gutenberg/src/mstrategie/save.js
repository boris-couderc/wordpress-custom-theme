import { __ } from '@wordpress/i18n'
import { useBlockProps, RichText } from '@wordpress/block-editor'

export default function save(props) {
	const blockProps = useBlockProps.save()

	return (
		<div {...blockProps}>
			<RichText.Content
				tagName="h2"
				className="mstrategie_title c-heading -h1"
				value={props.attributes.title}
			/>
			<RichText.Content
				tagName="div"
				className="mstrategie_hook"
				value={props.attributes.hook}
			/>

			<div className="mstrategie_container">
				<RichText.Content
					tagName="div"
					className="mstrategie_content"
					value={props.attributes.content}
				/>
			</div>
		</div>
	)
}
