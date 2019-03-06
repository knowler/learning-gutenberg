<?php

namespace Knowler\Blocks;

class Block
{
    public function __construct($name)
    {
        wp_register_script("blocks/{$name}", plugins_url("dist/blocks/{$name}.js", dirname(__FILE__)), [
            'wp-blocks',
            'wp-editor',
            'wp-element',
            'wp-i18n',
        ]);

        register_block_type("blocks/{$name}", [
            'editor_script' => "blocks/{$name}"
        ]);
    }
}
