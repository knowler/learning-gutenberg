<?php

namespace Knowler\Blocks;

class Block
{
    /**
     * Register block
     *
     * @param string $name The (file)name of the block
     */
    public static function register($name)
    {
        $block = "blocks/{$name}";

        wp_register_script($block, plugins_url("dist/{$block}.js", dirname(__FILE__)), [
            'wp-blocks',
            'wp-editor',
            'wp-element',
            'wp-i18n',
        ]);

        register_block_type($block, [
            'editor_script' => $block,
        ]);
    }
}
