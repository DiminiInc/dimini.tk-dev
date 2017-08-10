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

			<div id="error404_content" style="font-size:300%; font-family: Tahoma, Sans-Serif; text-align:center;">
				<p style="margin-top: 0px; margin-bottom: 20px;">
					404. Not found
				</p>
				<p style="margin-top: 0px; margin-bottom: 20px;">
					<a href="/en/" style="color:#000; font-size:50%;">Return to the main page</a>
				</p>
				<div id="player"></div>
				<script async src="https://www.youtube.com/iframe_api"></script>
				<script>
				 function onYouTubeIframeAPIReady() {
				  var player;
				  player = new YT.Player('player', {
				    videoId: 'DLzxrzFCyOs', 
				    width: 840,              
				    height: 630,              
				    playerVars: {
				      autoplay: 1,        
				      controls: 1,        
				      showinfo: 0,       
				      modestbranding: 1,  
				      loop: 1,           
				      fs: 0,              
				      cc_load_policy: 0, 
				      iv_load_policy: 3, 
				      autohide: 0         
				    },
				    events: {
				      onReady: function(e) {
				        e.target.mute();
				      }
				    }
				  });
				 }
				</script>
		    </div>

		</main><!-- .site-main -->

		<?php get_sidebar( 'content-bottom' ); ?>

	</div><!-- .content-area -->

<?php get_sidebar(); ?>
<?php get_footer(); ?>
