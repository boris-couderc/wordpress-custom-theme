import { __ } from '@wordpress/i18n'
import { useBlockProps, RichText, URLInput } from '@wordpress/block-editor'
import { TextControl } from '@wordpress/components'
import { Fragment } from '@wordpress/element'

import './editor.scss'

export default function Edit(props) {
	const blockProps = useBlockProps()

	return (
		<div {...blockProps}>
			<RichText
				tagName="h2"
				placeholder={__('Write your title here', 'mstrategie-gutenbergs')}
				value={props.attributes.title}
				className="mstrategie_title c-heading -h1"
				onChange={(title) => props.setAttributes({ title })}
				allowedFormats={['core/bold', 'core/italic', 'core/link']}
			/>
			<RichText
				tagName="div"
				multiline="p"
				placeholder={__('Write your text hook here', 'mstrategie-gutenbergs')}
				value={props.attributes.hook}
				className="mstrategie_hook"
				onChange={(hook) => props.setAttributes({ hook })}
				allowedFormats={['core/bold', 'core/italic', 'core/link']}
			/>

			<div className="mstrategie_container">
				<RichText
					tagName="div"
					multiline="p"
					placeholder={__('Write your content here', 'mstrategie-gutenbergs')}
					value={props.attributes.content}
					className="mstrategie_content"
					onChange={(content) => props.setAttributes({ content })}
					allowedFormats={['core/bold', 'core/italic', 'core/link']}
				/>
			</div>
		</div>
	)
}
