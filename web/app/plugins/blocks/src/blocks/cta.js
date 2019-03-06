const { registerBlockType } = wp.blocks
const { RichText } = wp.editor

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
  edit({ attributes, className, setAttributes }) {
    return (
      <RichText
        tagName='p'
        className={className}
        onChange={content => setAttributes({ content })}
        value={attributes.content}
      />
    )
  },
  save({ attributes }) {
    return (
      <RichText.Content
        tagName='p'
        value={attributes.content}
      />
    )
  },
})

