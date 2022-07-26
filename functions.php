<?php
/**
 * Genese functions and definitions
 *
 * The $includes array determines the code library included in your theme.
 * Add or remove files to the array as needed. Supports child theme overrides.
 *
 * Please note that missing files will produce a fatal error.
 * @link https://developer.wordpress.org/themes/basics/theme-functions/
 *
 * @package  WordPress
 * @subpackage Genese
 * @since 1.0
 * @author Mystro Ken <mystroken@gmail.com>
 */

$includes = array(
	/**
	 * Theme wrapper class
	 */
	'inc/class-genese-wrapping.php',
	/**
	 * Helper functions
	 */
	'inc/helpers.php',
	/**
	 * Theme setup
	 */
	'inc/setup.php',
	/**
	 *  Custom template tags for this theme.
	 */
	'inc/template-tags.php',
	/**
	 * Implement the Custom Header feature.
	 */
	'inc/custom-header.php',
	/**
	 * Functions which enhance the theme by hooking into WordPress.
	 */
	'inc/template-functions.php',
	/**
	 * Customizer additions.
	 */
	'inc/customizer.php',
	/**
	 * ACF Support
	 */
	'lib/advanced-custom-fields-pro/acf.php',
	/**
	 * Require some plugins
	 */
	'lib/tgm-plugin-activation-2.6.1/class-tgm-plugin-activation.php', // @see http://tgmpluginactivation.com/installation/ !
);

foreach ($includes as $file) {

	$filepath = locate_template($file);

	if (!$filepath) {
		/* translators: %s: Failed included file. */
		trigger_error(sprintf(esc_html_x('Error locating %s for inclusion', 'genese'), $file), E_USER_ERROR);
	}

	require_once $filepath;
}

unset($file, $filepath);





/**
 * Load Jetpack compatibility file.
 */
if ( defined( 'JETPACK__VERSION' ) ) {
	require 'inc/jetpack.php';
}

/**
 * Load WooCommerce compatibility file.
 */
if ( class_exists( 'WooCommerce' ) ) {
	require 'inc/woocommerce.php';
}

/**
 * Load ACF compatibility file.
 */
//require 'inc/acf.php';

/**
 * Load TGM compatibility file.
 */
//require 'inc/required-plugins.php';
