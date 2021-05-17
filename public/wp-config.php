<?php
/**
 * The base configuration for WordPress
 *
 * The wp-config.php creation script uses this file during the
 * installation. You don't have to use the web site, you can
 * copy this file to "wp-config.php" and fill in the values.
 *
 * This file contains the following configurations:
 *
 * * MySQL settings
 * * Secret keys
 * * Database table prefix
 * * ABSPATH
 *
 * @link https://codex.wordpress.org/Editing_wp-config.php
 *
 * @package WordPress
 */

// ** MySQL settings - You can get this info from your web host ** //
/** The name of the database for WordPress */
define( 'DB_NAME', 'local' );

/** MySQL database username */
define( 'DB_USER', 'root' );

/** MySQL database password */
define( 'DB_PASSWORD', 'root' );

/** MySQL hostname */
define( 'DB_HOST', 'localhost' );

/** Database Charset to use in creating database tables. */
define( 'DB_CHARSET', 'utf8' );

/** The Database Collate type. Don't change this if in doubt. */
define( 'DB_COLLATE', '' );

/**
 * Authentication Unique Keys and Salts.
 *
 * Change these to different unique phrases!
 * You can generate these using the {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}
 * You can change these at any point in time to invalidate all existing cookies. This will force all users to have to log in again.
 *
 * @since 2.6.0
 */
define('AUTH_KEY',         'w~R gP~Bj|z-aK,vE%etdDQe32d7t-[VvyRb!<`]BL9Cc.VfTnIRQ9n2-&Cse5,6');
define('SECURE_AUTH_KEY',  ')ANP*|[9Hl +K{-~t:L1o7&o#O_KC9IfgZ#XC.D|L8CA[+.5Me@iNQ.i;vFP-dww');
define('LOGGED_IN_KEY',    '<{Z5@E$ZjI]XW+(cs6Wc:M}^/NoSX@*G[GKV1rvk+.Z-3otThC}a PT3=D{DaPZZ');
define('NONCE_KEY',        'I uuyb[z-^:C%rB|oXgl+D8Eh:@A`xgu%[-|4xM&z+0g&;g|N;dE(FC@O!I1bZE+');
define('AUTH_SALT',        ')oi%wy*9xMP PEHK^mO4-K&BFE%#/J];^_B>*9}=:!NNXBotM@EClqp~HvEvz_i-');
define('SECURE_AUTH_SALT', 'YrOM;hKyJxC+jdbWg+~@fy$O9zc uAG[TZyXS-@klYe6[bn+By)j3WB6c<;hz!n|');
define('LOGGED_IN_SALT',   'T.6:_W*[IQ{<aC9f:V|aFWRQ$[dWkP`Ve3+-U }INb5H*(ET)r|P.9UPuI0ITpW@');
define('NONCE_SALT',       '1Up_IJpm2-8W+bK(EA*aNft%e3g|m_|lbO~kI2nJ}8^LB4=9sus7ZPo^,RxDJuhL');

/**
 * WordPress Database Table prefix.
 *
 * You can have multiple installations in one database if you give each
 * a unique prefix. Only numbers, letters, and underscores please!
 */
$table_prefix = 'wp_';


/** ADDBC
 * Pour les développeurs : le mode déboguage de WordPress.
 *
 * En passant la valeur suivante à "true", vous activez l’affichage des
 * notifications d’erreurs pendant vos essais.
 * Il est fortemment recommandé que les développeurs d’extensions et
 * de thèmes se servent de WP_DEBUG dans leur environnement de
 * développement.
 *
 * Pour plus d’information sur les autres constantes qui peuvent être utilisées
 * pour le déboguage, rendez-vous sur le Codex.
 *
 * @link https://fr.wordpress.org/support/article/debugging-in-wordpress/
 */
define( 'WP_DEBUG', true ); // Permet d'afficher les erreurs, à savoir, les révisions lorsque l'on modifie un contenu
// false en prod / true en developpement

if(WP_DEBUG) { // Si le debug est true
  define('WP_DEBUG_LOG', true); // Permet d'avoir le fichier debug.log
  
  define('WP_DEBUG_DISPLAY', true); // Je demande à wp de m'afficher les messages d'erreurs 

  // Désactivation total des révisions de contenus
  define('WP_POST_REVISIONS', false);

  // Vider la corbeille
  define('EMPTY_TRASH_DAYS', 0 );  // 0 days

} else {
  // Je suis en prod, Je désactive l'installation de thème et de plugins automatique
  define('DISALLOW_FILE_MODS', true);

  // JE limite le nombre de versions à 5 (pour éviter de surcharger la BDD quand on revoit un article car tout changement est sauvegardé)
  define('WP_POST_REVISIONS', 5);

  // La corbeille pour le client durera 15 jours avant d'être définitivement supprimé.
  define('EMPTY_TRASH_DAYS', 15 );  // 15 days
}

// J'ordonne à WP d'utiliser la méthode simple pour manipuler les fichiers
// Pas besoin de FTP ni de SSH : la machine est bien configurée et sécurisée
define('FS_METHOD', 'direct');

// désactiver l'éditeur de thème embarqué dans le tableau de bord de Wordpress (vu que l'on possède VSC)
// Pour éviter que votre client ne fasse n'importe quoi avec votre thème :D 
define('DISALLOW_FILE_EDIT', true);

// Alloué (augmenter) la mémoire PHP à 64Mo
define('WP_MEMORY_LIMIT', '64M');




/* That's all, stop editing! Happy publishing. */

/** Absolute path to the WordPress directory. */
if ( ! defined( 'ABSPATH' ) ) {
	define( 'ABSPATH', dirname( __FILE__ ) . '/' );
}

/** Sets up WordPress vars and included files. */
require_once ABSPATH . 'wp-settings.php';
