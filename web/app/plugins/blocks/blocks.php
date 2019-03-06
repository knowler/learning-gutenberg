<?php

/**
 * Plugin Name: Blocks
 * Description: Some custom blocks.
 * Author:      Nathan Knowler
 * Version:     0.1.0
 * Plugin URI:  http://localhost
 */

!file_exists($composer = __DIR__ . '/vendor/autoload.php') || require_once $composer;

add_action('init', function () {
    $blocks = json_decode(file_get_contents(__DIR__ . '/resources/blocks.json'));

    foreach ((array) $blocks as $block => $filepath) {
        new Knowler\Blocks\Block($block);
    }
});
