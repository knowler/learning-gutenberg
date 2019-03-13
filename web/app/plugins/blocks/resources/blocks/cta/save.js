import { RichText } from '@wordpress/editor'
import { CallToAction } from '@components/CallToAction'

export default ({ attributes, className }) => (
  <CallToAction>
    <RichText.Content
      tagName='h2'
      className='text-white font-light text-3xl mb-0'
      value={attributes.content}
    />
  </CallToAction>
)

