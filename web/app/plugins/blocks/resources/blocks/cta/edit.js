import { RichText } from '@wordpress/editor'

export default ({ attributes, className, setAttributes }) => (
  <div className={className}>
    <RichText
      tagName='p'
      onChange={content => setAttributes({ content })}
      value={attributes.content}
    />
  </div>
)

