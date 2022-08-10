import renderer from 'react-test-renderer';
import CalculatorPage from '../CalculatorPage.js';

it('renders correctly', () => {
  const tree = renderer
    .create(<CalculatorPage />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});