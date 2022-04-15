import React from 'react';
import { render, screen } from '@testing-library/react';
import SplashScreen from '.';


test('renders Logo SplashScreen', () => {
    render(<SplashScreen />);
    const h2 = screen.getByText('Logo');
    expect(h2).toBeInTheDocument();
});

