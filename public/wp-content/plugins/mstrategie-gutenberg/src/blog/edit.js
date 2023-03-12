import { __ } from '@wordpress/i18n'
import { useBlockProps, RichText } from '@wordpress/block-editor'

import './editor.scss'

export default function Edit(props) {
	const blockProps = useBlockProps()

	const { posts } = props

	if (posts) {
		console.log(posts[0])
	}

	const getDate = (postDate) => {
		const date = new Date(postDate)
		var options = { day: 'numeric', month: 'long', year: 'numeric' }
		return new Intl.DateTimeFormat('fr-FR', options).format(date)
	}

	return (
		<div {...blockProps}>
			{posts && posts.length === 0 ? (
				<div>
					<p>Pas d'articles trouvés</p>
				</div>
			) : posts ? (
				<ul className="mstrategie-blog">
					{posts.map((post) => {
						return (
							<li className="mstrategie-blog_card">
								<div class="mstrategie-blog_card-content">
									<a href={post.link} className="mstrategie-blog_card-title">
										<h3>{post.title.rendered}</h3>
									</a>
									<p class="mstrategie-blog_card-date">{getDate(post.date)}</p>
									<p>{post.excerpt.raw}</p>
									<p>
										<a href={post.link}>Lire l’article</a>
									</p>
								</div>
							</li>
						)
					})}
				</ul>
			) : (
				<div>
					<p>Chargement ...</p>
				</div>
			)}
		</div>
	)
}
