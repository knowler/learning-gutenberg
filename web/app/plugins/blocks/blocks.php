<?php

/**
 * Plugin Name:     Blocks
 * Description:     Some custom blocks.
 * Author:          Nathan Knowler
 * Version:         0.1.0
 */

if (file_exists($composer = __DIR__ . '/vendor/autoload.php')) {
    /** Load the Composer dependencies */
    require_once $composer;

    /** Register blocks from config */
    add_action('init', function () {
        if (file_exists($config = __DIR__ . '/resources/blocks.json')) {
            $blocks = (array) json_decode(file_get_contents($config));

            foreach ($blocks as $name => $filepath) {
                Knowler\Blocks\Block::register($name);
            }
        }
    });
}
