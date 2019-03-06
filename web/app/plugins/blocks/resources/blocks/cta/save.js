import { RichText } from '@wordpress/editor'

export default ({ attributes, className }) => (
  <div className={className}>
    <RichText.Content
      tagName='p'
      value={attributes.content}
    />
  </div>
)

