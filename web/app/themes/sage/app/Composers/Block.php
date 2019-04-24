<?php

namespace App\Composers;

use Roots\Acorn\View\Composer;
use function KnowlerKnows\AcfBlockBuilder\prepare_block;

class Title extends Composer
{
    protected static $views = ['blocks.*'];

    public function with($block, $view)
    {
        return prepare_block($block)['data'];
    }
}
