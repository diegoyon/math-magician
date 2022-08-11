import renderer from 'react-test-renderer';
import Home from '../Home';

it('renders correctly', () => {
  const tree = renderer
    .create(<Home />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});
