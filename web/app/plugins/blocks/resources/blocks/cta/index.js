import { registerBlockType } from '@wordpress/blocks'
import { __ } from '@wordpress/i18n'

import edit from '@blocks/cta/edit'
import save from '@blocks/cta/save'

registerBlockType('blocks/cta', {
  title: __('Call To Action'),
  icon: {
    background: '#161821',
    foreground: '#00d8af',
    src: 'megaphone',
  },
  category: 'layout',
  attributes: {
    content: {
      type: 'string',
      source: 'html',
      selector: 'p',
    },
    align: {
      type: 'string',
      default: 'full',
    },
  },
  styles: [
    {
      name: 'default',
      label: __('Standard'),
      isDefault: true,
    },
  ],
  supports: {
    align: true,
    alignWide: true,
  },
  edit,
  save,
})

