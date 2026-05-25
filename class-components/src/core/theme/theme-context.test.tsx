import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, expect, it } from 'vitest';
import { ThemeProvider, useTheme } from './theme-context.tsx';

function TestComponent() {
  const { theme, setTheme, toggleTheme } = useTheme();

  return (
    <div>
      <span data-testid="theme-value">{theme}</span>
      <button onClick={() => setTheme('dark')}>Set dark</button>
      <button onClick={toggleTheme}>Toggle</button>
    </div>
  );
}

describe('ThemeProvider', () => {
  it('renders with default theme and toggles theme', async () => {
    render(
      <ThemeProvider>
        <TestComponent />
      </ThemeProvider>
    );

    expect(screen.getByTestId('theme-value')).toHaveTextContent('light');

    await userEvent.click(screen.getByText('Set dark'));
    expect(screen.getByTestId('theme-value')).toHaveTextContent('dark');

    await userEvent.click(screen.getByText('Toggle'));
    expect(screen.getByTestId('theme-value')).toHaveTextContent('light');
  });
});
