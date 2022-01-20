<?php 

function load_stylesheet(){
	enqueue_style('mycss', get_template_directory_uri() . "\css\bootstrap.min.css");
}

add_action('enqueue_scripts','load_stylesheet');