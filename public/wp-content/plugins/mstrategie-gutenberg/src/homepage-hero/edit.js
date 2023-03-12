import { __ } from '@wordpress/i18n'
import {
	useBlockProps,
	RichText,
	MediaUpload,
	MediaUploadCheck,
} from '@wordpress/block-editor'
import { Placeholder, Button } from '@wordpress/components'

import './editor.scss'

export default function Edit(props) {
	const blockProps = useBlockProps()

	const onSelectImage = (picture) => {
		props.setAttributes({
			pictureID: picture.id,
			pictureURL: picture.url,
			pictureAlt: picture.alt,
		})
	}

	const onRemoveImage = () => {
		props.setAttributes({
			pictureID: null,
			pictureURL: null,
			pictureAlt: null,
		})
	}

	return (
		<div {...blockProps}>
			<div className="homepage-hero_content">
				<RichText
					tagName="h1"
					placeholder={__('Write your content here', 'mstrategie-gutenberg')}
					value={props.attributes.title}
					className="homepage-hero_title"
					onChange={(title) => props.setAttributes({ title })}
				/>

				<RichText
					tagName="div"
					multiline="p"
					placeholder={__('Write your content here', 'mstrategie-gutenberg')}
					value={props.attributes.content}
					className="homepage-hero_text"
					onChange={(content) => props.setAttributes({ content })}
					allowedFormats={['core/bold', 'core/italic', 'core/link']}
				/>
			</div>

			{!props.attributes.pictureID ? (
				<MediaUploadCheck>
					<MediaUpload
						onSelect={onSelectImage}
						allowedTypes={['image']}
						value={props.attributes.pictureID}
						render={({ open }) => (
							<Placeholder
								icon="images-alt"
								label={__('Photo', 'mstrategie-gutenberg')}
								instructions={__('Select a picture', 'mstrategie-gutenberg')}
							>
								<Button isSecondary isLarge onClick={open} icon="upload">
									{__('Import', 'mstrategie-gutenberg')}
								</Button>
							</Placeholder>
						)}
					/>
				</MediaUploadCheck>
			) : (
				<div className="homepage-hero_img">
					<img
						src={props.attributes.pictureURL}
						alt={props.attributes.pictureAlt}
						width="560"
						height="750"
					/>
					{props.isSelected && (
						<Button
							className="capitaine-remove-image"
							onClick={onRemoveImage}
							icon="dismiss"
						>
							{__('Remove picture', 'mstrategie-gutenberg')}
						</Button>
					)}
				</div>
			)}
		</div>
	)
}
