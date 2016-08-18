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

			<div id="error404_content" style="font-size:500%; font-family: Tahoma, Sans-Serif; text-align:center;">
				<p style="margin-top: 0px; margin-bottom: 20px;">
					404. Страница не найдена
				</p>
				<p style="margin-top: 0px; margin-bottom: 20px;">
					<a href="/en/" style="color:#000; font-size:50%;">Вернуться на главную</a>
				</p>
				<iframe width="840" height="630" src="https://www.youtube.com/embed/DLzxrzFCyOs?autoplay=1" frameborder="0" allowfullscreen></iframe>
		    </div>

		</main><!-- .site-main -->

		<?php get_sidebar( 'content-bottom' ); ?>

	</div><!-- .content-area -->

<?php get_sidebar(); ?>
<?php get_footer(); ?>
