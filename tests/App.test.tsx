import { render, screen, fireEvent } from '@testing-library/react';
import App from '../src/App';
import { fetchElevation } from '../src/scripts/http';

// Mock the external API
jest.mock('../src/scripts/http');
const mockFetchElevation = fetchElevation as jest.Mock;

describe('App Component', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  test('renders the inputs with default coordinates', () => {
    render(<App />);

    expect(screen.getByText(/Elevation calculator app/i)).toBeInTheDocument();

    const latitudeInput = screen.getByLabelText(/latitude/i);
    const longitudeInput = screen.getByLabelText(/longitude/i);

    expect(latitudeInput).toBeInTheDocument();
    expect(latitudeInput).toHaveValue(0); // Default value
    expect(longitudeInput).toBeInTheDocument();
    expect(longitudeInput).toHaveValue(0); // Default value
  });

  test('renders the inputs with initial coordinates', async () => {
    Object.defineProperty(globalThis.navigator, 'geolocation', {
      value: {
        getCurrentPosition: jest.fn().mockImplementationOnce((success) =>
          success({ coords: { latitude: 10.10, longitude: -10.10}})
        )
      },
    });

    render(<App />);

    const latitudeInput = await screen.findByLabelText(/latitude/i);
    const longitudeInput = screen.getByLabelText(/longitude/i);

    expect(latitudeInput).toHaveValue(10.10);
    expect(longitudeInput).toHaveValue(-10.10);
  });

  test('allows valid input values', () => {
    render(<App />);

    const latitudeInput = screen.getByLabelText(/latitude/i);
    const longitudeInput = screen.getByLabelText(/longitude/i);

    fireEvent.change(latitudeInput, { target: { value: '1.1' } });
    fireEvent.change(longitudeInput, { target: { value: '-1.1' } });

    expect(latitudeInput).toHaveValue(1.1);
    expect(longitudeInput).toHaveValue(-1.1);
  });

  test('prevents invalid input values', () => {
    render(<App />);

    const latitudeInput = screen.getByLabelText(/latitude/i);
    const longitudeInput = screen.getByLabelText(/longitude/i);

    fireEvent.change(latitudeInput, { target: { value: 'abc' } });
    fireEvent.change(longitudeInput, { target: { value: '123abc' } });

    expect(latitudeInput).not.toHaveValue('abc');
    expect(longitudeInput).not.toHaveValue('123abc');

    expect(latitudeInput).toHaveValue(0);
    expect(longitudeInput).toHaveValue(0);
  });

  test('shows correct elevation on submit', async () => {
    mockFetchElevation.mockResolvedValueOnce(100);

    render(<App />);

    const latitudeInput = screen.getByLabelText(/latitude/i);
    const longitudeInput = screen.getByLabelText(/longitude/i);
    const submitButton = screen.getByText(/submit/i);

    fireEvent.change(latitudeInput, { target: { value: '100.5' } });
    fireEvent.change(longitudeInput, { target: { value: '-100.5' } });
    fireEvent.click(submitButton);

    expect(mockFetchElevation).toHaveBeenCalledWith(100.5, -100.5);
    expect(mockFetchElevation).toHaveBeenCalledTimes(1);

    // Ensure the component is rendered before expecting
    await screen.findByText(/Elevation calculator app/i);

    const elevationElement = await screen.findByText(/Last calculated elevation is: 100/i);
    expect(elevationElement).toBeInTheDocument();
  });

  test('displays a history of fetched elevations', async () => {
    // Mock the fetchElevation function to return different elevations
    mockFetchElevation
      .mockResolvedValueOnce(100)
      .mockResolvedValueOnce(200);

    render(<App />);

    const submitButton = screen.getByText(/submit/i);

    // First fetch
    fireEvent.click(submitButton);
    await screen.findByText(/Last calculated elevation/i);

    // Second fetch
    fireEvent.click(submitButton);
    await screen.findByText(/Last calculated elevation/i);

    const historyItems = screen.getAllByRole('listitem');
    expect(historyItems).toHaveLength(2);
    expect(historyItems[0]).toHaveTextContent("200");
    expect(historyItems[1]).toHaveTextContent("100");
  });
});