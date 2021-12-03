import { render, screen } from '@testing-library/react';

import Main from './Main';

describe('Componente Main', () => {
  it('Should render the heading', () => {
    const { container } = render(<Main />);

    expect(
      screen.getByRole('heading', { name: /react avançado/i })
    ).toBeInTheDocument();

    expect(container.firstChild).toMatchSnapshot();
  });
});
