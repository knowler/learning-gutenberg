import { RichText } from '@wordpress/editor'
import { CallToAction } from '../../components/CallToAction'

export default ({ attributes, className, setAttributes }) => (
  <CallToAction>
    <RichText
      tagName='h2'
      className='text-white font-light text-3xl mb-0'
      onChange={content => setAttributes({ content })}
      value={attributes.content}
    />
  </CallToAction>
)

