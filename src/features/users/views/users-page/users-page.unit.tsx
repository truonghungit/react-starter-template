import '@testing-library/jest-dom';

import { render } from '@testing-library/react';

import UsersPage from './users-page';

describe('UsersPage', () => {
  it('should', () => {
    const { getByText } = render(<UsersPage />);
    getByText('Users Page work');
  });
});
