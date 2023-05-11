import renderer from 'react-test-renderer'
import { Button } from './Button'

describe('Button', () => {
  it('renders correctly with react-test-renderer', () => {
    const button = renderer.create(<Button />)
    expect(button.toJSON()).toMatchSnapshot()
  })
})