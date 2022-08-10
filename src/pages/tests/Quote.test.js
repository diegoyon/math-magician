import renderer from 'react-test-renderer';
import Quote from '../Quote.js';

it('renders correctly', () => {
  const tree = renderer
    .create(<Quote />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});