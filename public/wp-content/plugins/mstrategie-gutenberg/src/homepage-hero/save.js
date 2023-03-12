import { __ } from '@wordpress/i18n'
import { useBlockProps, RichText } from '@wordpress/block-editor'

export default function save(props) {
	const blockProps = useBlockProps.save()

	return (
		<div {...blockProps}>
			<div className="homepage-hero_content">
				<RichText.Content
					tagName="h1"
					className="homepage-hero_title"
					value={props.attributes.title}
				/>

				<RichText.Content
					tagName="div"
					className="homepage-hero_text"
					value={props.attributes.content}
				/>
			</div>

			{props.attributes.pictureID && (
				<div className="homepage-hero_img">
					<img
						src={props.attributes.pictureURL}
						alt={props.attributes.pictureAlt}
						width="560"
						height="750"
					/>
				</div>
			)}
		</div>
	)
}
