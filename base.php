<?php
/**
 * Theme Wrapper.
 *
 * The goal of the theme wrapper is to
 * remove any repeated markup from individual template.
 *
 * @see https://roots.io/sage/docs/theme-templates/
 *
 * @package Genese
 * @subpackage Base_Template
 * @since 1.0.0
 * @author Mystro Ken <mystroken@gmail.com>
 */

?>
<!doctype html>
<html class="no-js" <?php language_attributes(); ?>>

<head>
	<meta charset="<?php bloginfo('charset'); ?>">
	<meta http-equiv="X-UA-Compatible" content="IE=edge">
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
	<link rel="profile" href="http://gmpg.org/xfn/11">

	<link rel="preconnect" href="https://fonts.googleapis.com">
	<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
	<link href="https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,400;0,700;1,400&display=swap" rel="stylesheet">
	<?php wp_head(); ?>
</head>

<body <?php body_class(); ?>>
	<?php // wp_body_open(); ?>
	<div id="app" class="" role="document" itemscope itemtype="http://schema.org/WebPage">
		<?php get_header(); ?>
		<main id="main" class="main" role="main" itemprop="mainContentOfPage">
			<?php
				/*
				* Get the right WordPress template file.
				*/
				require genese_template_path();
			?>
		</main>
		<?php get_footer(); ?>
	</div>
	<div id="loader"></div>
	<noscript>
		<div class="issue-js"><?php echo __('Please enable JavaScript to view this website.', 'genese'); ?></div>
	</noscript>
	<?php wp_footer(); ?>
</body>

</html>
