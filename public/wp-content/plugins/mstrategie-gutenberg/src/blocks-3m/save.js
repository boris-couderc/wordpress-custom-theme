import { __ } from '@wordpress/i18n'
import { useBlockProps, RichText } from '@wordpress/block-editor'

export default function save(props) {
	const blockProps = useBlockProps.save()

	return (
		<div {...blockProps}>
			<div className="blocks-3m_container">
				<RichText.Content
					tagName="h2"
					className="blocks-3m_title blocks-3m_title-1"
					value={props.attributes.title}
				/>
				<RichText.Content
					tagName="div"
					className="blocks-3m_content-1"
					value={props.attributes.content}
				/>
				<a
					className="blocks-3m_text-link-1 c-button -outline"
					href={props.attributes.url}
				>
					{props.attributes.textLink}
				</a>
			</div>

			<div className="blocks-3m_container">
				<RichText.Content
					tagName="h2"
					className="blocks-3m_title blocks-3m_title-2"
					value={props.attributes.title2}
				/>
				<RichText.Content
					tagName="div"
					className="blocks-3m_content-2"
					value={props.attributes.content2}
				/>
				<a
					className="blocks-3m_text-link-2 c-button -outline"
					href={props.attributes.url2}
				>
					{props.attributes.textLink2}
				</a>
			</div>

			<div className="blocks-3m_container">
				<RichText.Content
					tagName="h2"
					className="blocks-3m_title blocks-3m_title-3"
					value={props.attributes.title3}
				/>
				<RichText.Content
					tagName="div"
					className="blocks-3m_content-3"
					value={props.attributes.content3}
				/>
				<a
					className="blocks-3m_text-link-3 c-button -outline -white"
					href={props.attributes.url3}
				>
					{props.attributes.textLink3}
				</a>
			</div>
		</div>
	)
}
