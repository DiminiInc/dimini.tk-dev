<?php
/**
 * The template for displaying 404 pages (not found)
 *
 * @package WordPress
 * @subpackage Twenty_Sixteen
 * @since Twenty Sixteen 1.0
 */

get_header(); ?>

	<div id="primary" class="content-area">
		<main id="main" class="site-main" role="main">

			<div id="error404_content" style="font-size:500%; font-family: Futura, Tahoma, Sans-Serif; text-align:center;">
			<p style="margin-top: 0px; margin-bottom: 20px;">
				404. &#1057;&#1090;&#1088;&#1072;&#1085;&#1080;&#1094;&#1072; &#1085;&#1077; &#1085;&#1072;&#1081;&#1076;&#1077;&#1085;&#1072;
			</p>
			<p style="margin-top: 0px; margin-bottom: 20px;">
				<a href="./" style="color:#000; font-size:50%;">&#1042;&#1077;&#1088;&#1085;&#1091;&#1090;&#1100;&#1089;&#1103; &#1085;&#1072; &#1075;&#1083;&#1072;&#1074;&#1085;&#1091;&#1102;</a>
			</p>
			<iframe width="840" height="630" src="https://www.youtube.com/embed/DLzxrzFCyOs?autoplay=1" frameborder="0" allowfullscreen></iframe>
	    </div>

		</main><!-- .site-main -->

		<?php get_sidebar( 'content-bottom' ); ?>

	</div><!-- .content-area -->

<?php get_sidebar(); ?>
<?php get_footer(); ?>
