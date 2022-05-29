<?php
/**
 * The template for displaying the header
 *
 * Displays all of the head element and everything up until the "site-content" div.
 *
 * @package WordPress
 * @subpackage Twenty_Sixteen
 * @since Twenty Sixteen 1.0
 */

?><!DOCTYPE html>
<html <?php language_attributes(); ?> class="no-js">
<head>
	<?php include("/home/dimini.heliohost.org/public_html/global/head.php"); ?>
	
	<meta charset="<?php bloginfo( 'charset' ); ?>">
	<meta name="viewport" content="width=device-width, initial-scale=1">
	<link rel="profile" href="http://gmpg.org/xfn/11">
	<?php if ( is_singular() && pings_open( get_queried_object() ) ) : ?>
	<link rel="pingback" href="<?php bloginfo( 'pingback_url' ); ?>">
	<?php endif; ?>
	<?php wp_head(); ?>
</head>

<body <?php body_class(); ?>>
<div id="page" class="site">

<?php include("/home/dimini.heliohost.org/public_html/global/tagmanager.php"); ?>
<?php include("/home/dimini.heliohost.org/public_html/en/notification.php"); ?>
<?php include("/home/dimini.heliohost.org/public_html/en/header.php"); ?>

		<div id="content" class="site-content">					