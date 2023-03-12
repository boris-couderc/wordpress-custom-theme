<?php

// Fonction de génération du HTML dynamique
function mstrategie_blog_render($attributes)
{

	$args = array(
		'posts_per_page' => 3,
	);

	$posts = get_posts($args);

	if (count($posts) == 0) {
		return '<p>Pas d’article</p>';
	}

	$markup = '<ul class="mstrategie-blog">';
	foreach ($posts as $post) {

		$markup .= '<li class="mstrategie-blog_card">';

		$image = get_the_post_thumbnail($post->ID);

		if (!empty($image)) {
			$markup .= sprintf(
				'<a href="%1$s" class="mstrategie-blog_card-visuel">',
				esc_url(get_permalink($post->ID))
			);
			$markup .= $image;
			$markup .= '</a>';
		}

		$markup .= '<div class="mstrategie-blog_card-content">';

		$markup .= sprintf(
			'<a href="%1$s" class="mstrategie-blog_card-title"><h3>%2$s</h3></a>',
			esc_url(get_permalink($post->ID)),
			esc_html(get_the_title($post->ID))
		);

		$markup .= sprintf(
			'<p class="mstrategie-blog_card-date">%1$s</p>',
			esc_html(get_the_date('d F Y', $post->ID))
		);

		$markup .= sprintf(
			'<p>%1$s</p>',
			esc_html(get_the_excerpt($post->ID))
		);

		$markup .= sprintf(
			'<p><a href="%1$s">Lire l\'article</a></p>',
			esc_url(get_permalink($post->ID))
		);

		$markup .= '</div></li>';
	}
	$markup .= '</ul>';

	return $markup;
}

// Déclarer les blocs qui ont un rendu côté PHP
function mstrategie_register_blocks()
{

	// Pour l'exemple 15 : déclarer le bloc dynamique
	register_block_type('mstrategie/blog', array(
		'render_callback' => 'mstrategie_blog_render',
	));
}
add_action('init', 'mstrategie_register_blocks');
