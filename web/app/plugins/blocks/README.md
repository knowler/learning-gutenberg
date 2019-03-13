# Example Gutenberg Blocks Plugin

A first attempt at a plugin for adding new Gutenberg blocks.

## Adding new blocks

You don’t have to write any PHP for creating new blocks.
Register new blocks in `resources/blocks.json` like the
following:

```json
{
  "cta": "./blocks/cta/index.js"
}
```

This is used as the webpack entry. The block is registered by
the plugin automatically.
