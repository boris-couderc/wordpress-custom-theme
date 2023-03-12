<?php

$context = Timber::context();
$timber_post     = new Timber\Post();
$context['post'] = $timber_post;

$templates       = array('home.twig');

Timber::render($templates, $context);
