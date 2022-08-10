import renderer from 'react-test-renderer';
import CalculatorPage from '../CalculatorPage';

it('renders correctly', () => {
  const tree = renderer
    .create(<CalculatorPage />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});
