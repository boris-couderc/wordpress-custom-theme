import { __ } from '@wordpress/i18n'
import { useBlockProps, RichText, URLInput } from '@wordpress/block-editor'
import { TextControl } from '@wordpress/components'
import { Fragment } from '@wordpress/element'

import './editor.scss'

export default function Edit(props) {
	const blockProps = useBlockProps()

	return (
		<div {...blockProps}>
			<div className="blocks-3m_container">
				<RichText
					tagName="h2"
					placeholder={__('Write your title here', 'mstrategie-gutenbergs')}
					value={props.attributes.title}
					className="blocks-3m_title blocks-3m_title-1"
					onChange={(title) => props.setAttributes({ title })}
					allowedFormats={['core/bold', 'core/italic', 'core/link']}
				/>
				<RichText
					tagName="div"
					multiline="p"
					placeholder={__('Write your content here', 'mstrategie-gutenbergs')}
					value={props.attributes.content}
					className="blocks-3m_content blocks-3m_content-1"
					onChange={(content) => props.setAttributes({ content })}
					allowedFormats={['core/bold', 'core/italic', 'core/link']}
				/>
				{props.isSelected ? (
					<Fragment>
						<TextControl
							placeholder={__('Link Label', 'mstrategie-gutenbergs')}
							value={props.attributes.textLink}
							onChange={(textLink) => props.setAttributes({ textLink })}
						/>
						<URLInput
							value={props.attributes.url}
							onChange={(url, post) =>
								props.setAttributes({
									url,
									textLink: (post && post.title) || props.attributes.textLink,
								})
							}
						/>
					</Fragment>
				) : (
					<a
						className="blocks-3m_text-link-1 c-button -outline"
						href={props.attributes.url}
					>
						{props.attributes.textLink ||
							__('Edit link', 'mstrategie-gutenbergs')}
					</a>
				)}
			</div>

			<div className="blocks-3m_container">
				<RichText
					tagName="h2"
					placeholder={__('Write your title here', 'mstrategie-gutenbergs')}
					value={props.attributes.title2}
					className="blocks-3m_title blocks-3m_title-2"
					onChange={(title2) => props.setAttributes({ title2 })}
					allowedFormats={['core/bold', 'core/italic', 'core/link']}
				/>
				<RichText
					tagName="div"
					multiline="p"
					placeholder={__('Write your content here', 'mstrategie-gutenbergs')}
					value={props.attributes.content2}
					className="blocks-3m_content blocks-3m_content-2"
					onChange={(content2) => props.setAttributes({ content2 })}
					allowedFormats={['core/bold', 'core/italic', 'core/link']}
				/>
				{props.isSelected ? (
					<Fragment>
						<TextControl
							placeholder={__('Link Label', 'mstrategie-gutenbergs')}
							value={props.attributes.textLink2}
							onChange={(textLink2) => props.setAttributes({ textLink2 })}
						/>
						<URLInput
							value={props.attributes.url2}
							onChange={(url2, post) =>
								props.setAttributes({
									url2,
									textLink2: (post && post.title) || props.attributes.textLink2,
								})
							}
						/>
					</Fragment>
				) : (
					<a
						className="blocks-3m_text-link-2 c-button -outline"
						href={props.attributes.url2}
					>
						{props.attributes.textLink2 ||
							__('Edit link', 'mstrategie-gutenbergs')}
					</a>
				)}
			</div>

			<div className="blocks-3m_container">
				<RichText
					tagName="h2"
					placeholder={__('Write your title here', 'mstrategie-gutenbergs')}
					value={props.attributes.title3}
					className="blocks-3m_title blocks-3m_title-3"
					onChange={(title3) => props.setAttributes({ title3 })}
					allowedFormats={['core/bold', 'core/italic', 'core/link']}
				/>
				<RichText
					tagName="div"
					multiline="p"
					placeholder={__('Write your content here', 'mstrategie-gutenbergs')}
					value={props.attributes.content3}
					className="blocks-3m_content blocks-3m_content-3"
					onChange={(content3) => props.setAttributes({ content3 })}
					allowedFormats={['core/bold', 'core/italic', 'core/link']}
				/>
				{props.isSelected ? (
					<Fragment>
						<TextControl
							placeholder={__('Link Label', 'mstrategie-gutenbergs')}
							value={props.attributes.textLink3}
							onChange={(textLink3) => props.setAttributes({ textLink3 })}
						/>
						<URLInput
							value={props.attributes.url3}
							onChange={(url3, post) =>
								props.setAttributes({
									url3,
									textLink3: (post && post.title) || props.attributes.textLink3,
								})
							}
						/>
					</Fragment>
				) : (
					<a
						className="blocks-3m_text-link-3 c-button -outline -white"
						href={props.attributes.url3}
					>
						{props.attributes.textLink3 ||
							__('Edit link', 'mstrategie-gutenbergs')}
					</a>
				)}
			</div>
		</div>
	)
}
