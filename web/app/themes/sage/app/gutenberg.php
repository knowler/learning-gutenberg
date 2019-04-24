<?php

use KnowlerKnows\AcfBlockBuilder\Block;

$banner = new Block('banner');
$banner
    ->addText('title')
    ->addText('subtitle');

add_action('acf/init', function () use ($banner) {
    if (function_exists('acf_add_local_field_group')) {
        acf_add_local_field_group($banner->build());
    }
});
