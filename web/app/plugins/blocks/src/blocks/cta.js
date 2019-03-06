import { registerBlockType } from '@wordpress/blocks'
import { RichText } from '@wordpress/editor'

registerBlockType('blocks/cta', {
  title: 'Call To Action',
  icon: 'megaphone',
  category: 'layout',
  attributes: {
    content: {
      type: 'string',
      source: 'html',
      selector: 'p',
    },
  },
  edit: ({ attributes, className, setAttributes }) => (
    <RichText
      tagName='p'
      className={className}
      onChange={content => setAttributes({ content })}
      value={attributes.content}
    />
  ),
  save: ({ attributes }) => (
    <RichText.Content
      tagName='p'
      value={attributes.content}
    />
  ),
})

