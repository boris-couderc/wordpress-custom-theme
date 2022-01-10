<?php
/**
 * Timber starter-theme
 * https://github.com/timber/starter-theme
 *
 * @package  WordPress
 * @subpackage  Timber
 * @since   Timber 0.1
 */

/**
 * If you are installing Timber as a Composer dependency in your theme, you'll need this block
 * to load your dependencies and initialize Timber. If you are using Timber via the WordPress.org
 * plug-in, you can safely delete this block.
 */
$composer_autoload = __DIR__ . '/vendor/autoload.php';
if ( file_exists( $composer_autoload ) ) {
	require_once $composer_autoload;
	$timber = new Timber\Timber();
}

/**
 * This ensures that Timber is loaded and available as a PHP class.
 * If not, it gives an error message to help direct developers on where to activate
 */
if ( ! class_exists( 'Timber' ) ) {

	add_action(
		'admin_notices',
		function() {
			echo '<div class="error"><p>Timber not activated. Make sure you activate the plugin in <a href="' . esc_url( admin_url( 'plugins.php#timber' ) ) . '">' . esc_url( admin_url( 'plugins.php' ) ) . '</a></p></div>';
		}
	);

	add_filter(
		'template_include',
		function( $template ) {
			return get_stylesheet_directory() . '/static/no-timber.html';
		}
	);
	return;
}

/**
 * Sets the directories (inside your theme) to find .twig files
 */
Timber::$dirname = array( 'templates', 'views' );

/**
 * By default, Timber does NOT autoescape values. Want to enable Twig's autoescape?
 * No prob! Just set this value to true
 */
Timber::$autoescape = false;


/**
 * We're going to configure our theme inside of a subclass of Timber\Site
 * You can move this to its own file and include here via php's include("MySite.php")
 */
class StarterSite extends Timber\Site {
	/** Add timber support. */
	public function __construct() {
		add_action( 'after_setup_theme', array( $this, 'theme_supports' ) );
		add_filter( 'timber/context', array( $this, 'add_to_context' ) );
		add_filter( 'timber/twig', array( $this, 'add_to_twig' ) );
		add_action( 'init', array( $this, 'register_post_types' ) );
		add_action( 'init', array( $this, 'register_taxonomies' ) );

		// OPTIM wp
		// https://wpcours.com/wp-tutoriels/accelerer-wordpress-on-nettoyant-le-header-de-votre-theme/

		// Disable wp-emoji
		remove_action ('wp_head', 'print_emoji_detection_script', 7);
		remove_action ('wp_print_styles', 'print_emoji_styles');
		remove_action ('admin_print_scripts', 'print_emoji_detection_script');
		remove_action ('admin_print_styles', 'print_emoji_styles');

		// Disable admin bar 
		add_filter('show_admin_bar', '__return_false');

		// Disable rest api
		// add_action( 'rest_authentication_errors', array( $this, 'rest_auth_errors' ) );
		remove_action( 'wp_head', 'rest_output_link_wp_head', 10);
		remove_action( 'wp_head', 'wp_oembed_add_discovery_links', 10);
		remove_action( 'template_redirect', 'rest_output_link_header', 11, 0);

		// Remove shortlink
		remove_action( 'wp_head', 'wp_shortlink_wp_head', 10, 0);
		// remove_action( 'wp_head', 'rel_canonical');
		remove_action( 'wp_head', 'feed_links_extra', 3 ); // Display the links to the extra feeds such as category feeds
		remove_action( 'wp_head', 'feed_links', 2 ); // Display the links to the general feeds: Post and Comment Feed
		remove_action( 'wp_head', 'rsd_link' ); // Display the link to the Really Simple Discovery service endpoint, EditURI link
		remove_action( 'wp_head', 'wlwmanifest_link' ); // Display the link to the Windows Live Writer manifest file.
		remove_action( 'wp_head', 'index_rel_link' ); // index link
		remove_action( 'wp_head', 'parent_post_rel_link', 10, 0 ); // prev link
		remove_action( 'wp_head', 'start_post_rel_link', 10, 0 ); // start link
		remove_action( 'wp_head', 'adjacent_posts_rel_link', 10, 0 ); // Display relational links for the posts adjacent to the current post.
		remove_action( 'wp_head', 'wp_generator' ); //

		add_action( 'wp_footer', array($this, 'disable_embed') );
		add_action( 'wp_enqueue_scripts', array($this, 'enqueue_scripts') );

		// BC : autorise import svg & webp / capitaine wordpress
		add_filter( 'upload_mimes', array($this, 'mime_types' ) );
		// Contrôle de l'import d'un WEBP
		add_filter( 'wp_check_filetype_and_ext', array($this, 'file_types' ), 10, 4 );
		
		parent::__construct();
	}


	/** This is where you can register custom post types. */
	public function register_post_types() {}

	/** This is where you can register custom taxonomies. */
	public function register_taxonomies() {}

	/** Disable rest api */
	public function rest_auth_errors( $result ){
		if ( ! empty( $result ) ) {
			return $result;
		}
		if ( ! is_user_logged_in() ) {
			return new WP_Error( 'rest_not_logged_in', 'You are not currently logged in.', array( 'status' => 401 ) );
		}
		if ( ! current_user_can( 'administrator' ) ) {
			return new WP_Error( 'rest_not_admin', 'You are not an administrator.', array( 'status' => 401 ) );
		}
		return $result;
	}

	/** Disable embed */
	public function disable_embed(){
		wp_dequeue_script( 'wp-embed' );
	}

	/** Add css & js  */
	public function enqueue_scripts() {
		$theme_informations = wp_get_theme();
   		$theme_version      = $theme_informations->get('Version');
		wp_enqueue_script('app', get_template_directory_uri() . '/dist/scripts/app.js', [], null, true );
		wp_enqueue_style('app', get_template_directory_uri() . '/dist/styles/style.css', [], $theme_version);
	}

	/** Add Webp & svg support */
	public function mime_types( $mimes ){
		$mimes['svg'] = 'image/svg+xml';
		$mimes['webp'] = 'image/webp';
		return $mimes;
	}

	public function file_types( $types, $file, $filename, $mimes ) {
		if ( false !== strpos( $filename, '.webp' ) ) {
			$types['ext'] = 'webp';
			   $types['type'] = 'image/webp';
		}
		return $types;
	}

	/** This is where you add some context
	 *
	 * @param string $context context['this'] Being the Twig's {{ this }}.
	 */
	public function add_to_context( $context ) {
		$context['foo']   = 'bar';
		$context['stuff'] = 'I am a value set in your functions.php file';
		$context['notes'] = 'These values are available everytime you call Timber::context();';
		//$context['menu']  = new Timber\Menu();
		$context['menu'] = new Timber\Menu('Primary menu');
		$context['menu_footer'] = new Timber\Menu('Footer menu');
		$context['site']  = $this;
		return $context;
	}

	public function theme_supports() {
		// Add default posts and comments RSS feed links to head.
		add_theme_support( 'automatic-feed-links' );

		/*
		 * Let WordPress manage the document title.
		 * By adding theme support, we declare that this theme does not use a
		 * hard-coded <title> tag in the document head, and expect WordPress to
		 * provide it for us.
		 */
		add_theme_support( 'title-tag' );

		/*
		 * Enable support for Post Thumbnails on posts and pages.
		 *
		 * @link https://developer.wordpress.org/themes/functionality/featured-images-post-thumbnails/
		 */
		add_theme_support( 'post-thumbnails' );

		/*
		 * Switch default core markup for search form, comment form, and comments
		 * to output valid HTML5.
		 */
		add_theme_support(
			'html5',
			array(
				'comment-form',
				'comment-list',
				'gallery',
				'caption',
			)
		);

		/*
		 * Enable support for Post Formats.
		 *
		 * See: https://codex.wordpress.org/Post_Formats
		 */
		add_theme_support(
			'post-formats',
			array(
				'aside',
				'image',
				'video',
				'quote',
				'link',
				'gallery',
				'audio',
			)
		);

		add_theme_support( 'menus' );

		/*
		 * Add custom editor
		 */

		add_theme_support( 'editor-styles' );
		add_editor_style('./dist/styles/style-editor.css');

		add_theme_support( 'editor-color-palette',
			array(
				array( 'name' => 'yellow', 'slug'  => 'yellow', 'color' => '#F8E834' ),
				array( 'name' => 'grey', 'slug'  => 'grey', 'color' => '#515151' ),
				array( 'name' => 'darkgrey', 'slug'  => 'darkgrey', 'color' => '#404040' ),
			)
		);
		
		add_theme_support( 'align-wide' );
	}

	/** This Would return 'foo bar!'.
	 *
	 * @param string $text being 'foo', then returned 'foo bar!'.
	 */
	public function myfoo( $text ) {
		$text .= ' bar!';
		return $text;
	}

	/** This is where you can add your own functions to twig.
	 *
	 * @param string $twig get extension.
	 */
	public function add_to_twig( $twig ) {
		$twig->addExtension( new Twig\Extension\StringLoaderExtension() );
		$twig->addFilter( new Twig\TwigFilter( 'myfoo', array( $this, 'myfoo' ) ) );
		return $twig;
	}

}

new StarterSite(); 
