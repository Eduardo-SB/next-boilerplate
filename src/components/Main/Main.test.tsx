import { render, screen } from '@testing-library/react';

import Main from './Main';

describe('Componente Main', () => {
  it('Should render the heading', () => {
    const { container } = render(<Main />);

    expect(
      screen.getByRole('heading', { name: /react boilerplate/i })
    ).toBeInTheDocument();

    expect(container.firstChild).toMatchSnapshot();
  });

  it('Shuould render the colors correctly', () => {
    const { container } = render(<Main />);

    expect(container.firstChild).toHaveStyle({ 'background-color': '#06092b' });
  });
});
