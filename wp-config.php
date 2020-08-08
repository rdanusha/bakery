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
 * @link https://wordpress.org/support/article/editing-wp-config-php/
 *
 * @package WordPress
 */

// ** MySQL settings - You can get this info from your web host ** //
/** The name of the database for WordPress */
define( 'DB_NAME', 'bakery' );

/** MySQL database username */
define( 'DB_USER', 'root' );

/** MySQL database password */
define( 'DB_PASSWORD', 'abcABC@123' );

/** MySQL hostname */
define( 'DB_HOST', 'localhost' );

/** Database Charset to use in creating database tables. */
define( 'DB_CHARSET', 'utf8mb4' );

/** The Database Collate type. Don't change this if in doubt. */
define( 'DB_COLLATE', '' );

define( 'FS_METHOD', 'direct' );


/**#@+
 * Authentication Unique Keys and Salts.
 *
 * Change these to different unique phrases!
 * You can generate these using the {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}
 * You can change these at any point in time to invalidate all existing cookies. This will force all users to have to log in again.
 *
 * @since 2.6.0
 */
define( 'AUTH_KEY',         'h:S8JrXgN.h]6c(iidlc<hE7z1*)SVx,<ps$*IryA3nl?&bt{-hMLMn]}_l}*fl$' );
define( 'SECURE_AUTH_KEY',  ';j>Bi&2&&t]T8pAc}%GWTK?j0HYHk*S~l~Tm$7`?s<d9 Q@A7ZAOYim,7MrG[dFz' );
define( 'LOGGED_IN_KEY',    'zA0#jXwT&R|)bbsw9I[YHL:8)-i^@.>)l25W+c(m^BVe44o/_L^N}ODT79nr3_%q' );
define( 'NONCE_KEY',        '<>gNnY.)rZ+711r1F|;GjG02*}SsM_*BrNs&4/p<Ex]zPH=lxj<DO@6LXhBfD@g.' );
define( 'AUTH_SALT',        '{VRYvEi_h -Pg:h,st!B(cCE_ftBu:{;58+vM3n,DuB6vwB[GUw95Ei,sN_%8==8' );
define( 'SECURE_AUTH_SALT', 'WHZW.*zs:KnG^OluNV?4bpyVNGNgS-n<-:5Nf?JPZ=S|pj.`z;+ZO1&LId-,uHOV' );
define( 'LOGGED_IN_SALT',   '+X1-egxtj]i(B+>q+ghlV(I(bhaE<qI,P RM~zGwq7R^WAU[S33TlgD/u(dhb2]D' );
define( 'NONCE_SALT',       'N{wTb@BA)mV$:Ops#1<z1$iZA4;lK_/i^BIakgPm@27AD3tJRE_LeB|U,dZ~5,]r' );

/**#@-*/

/**
 * WordPress Database Table prefix.
 *
 * You can have multiple installations in one database if you give each
 * a unique prefix. Only numbers, letters, and underscores please!
 */
$table_prefix = 'wp_';

/**
 * For developers: WordPress debugging mode.
 *
 * Change this to true to enable the display of notices during development.
 * It is strongly recommended that plugin and theme developers use WP_DEBUG
 * in their development environments.
 *
 * For information on other constants that can be used for debugging,
 * visit the documentation.
 *
 * @link https://wordpress.org/support/article/debugging-in-wordpress/
 */
define( 'WP_DEBUG', false );

/* That's all, stop editing! Happy publishing. */

/** Absolute path to the WordPress directory. */
if ( ! defined( 'ABSPATH' ) ) {
	define( 'ABSPATH', __DIR__ . '/' );
}
/** Sets up WordPress vars and included files. */
require_once ABSPATH . 'wp-settings.php';

