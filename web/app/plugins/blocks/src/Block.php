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
        $this->name = "blocks/{$name}";

        wp_register_script($this->name, plugins_url("dist/{$this->name}.js", dirname(__FILE__)), [
            'wp-blocks',
            'wp-editor',
            'wp-element',
            'wp-i18n',
        ]);

        register_block_type($this->name, [
            'editor_script' => $this->name,
        ]);
    }
}
