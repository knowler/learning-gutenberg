<?php
/**
 * Plugin Name: Blocks
 * Description: Some custom blocks.
 * Author:      Nathan Knowler
 * Version:     0.1.0
 * Plugin URI:  http://localhost
 */
add_action('init', function () {
    wp_register_script('blocks/cta', plugins_url('blocks/dist/blocks/cta.js'), [
        'wp-blocks',
        'wp-element',
        'wp-editor',
        'wp-i18n',
    ]);

    register_block_type('blocks/cta', [
        'editor_script' => 'blocks/cta'
    ]);
});
