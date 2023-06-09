import ContactForm from './ContactForm.svelte';
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/svelte';

describe('ContactForm', () => {
	beforeEach(() => {
		render(ContactForm);
	});

	it('should have labels', () => {
		expect(screen.getByText('Email')).toBeInTheDocument();
		expect(screen.getByText('Message')).toBeInTheDocument();
		expect(screen.getByText('Send')).toBeInTheDocument();
	});

	it('should have inputs', () => {
		expect(screen.getByPlaceholderText('Your email')).toBeInTheDocument();
		expect(screen.getByPlaceholderText('Your message')).toBeInTheDocument();
		expect(screen.getByTestId('submit-button')).toBeInTheDocument();
	});

	it('should have empty inputs on init', () => {
		expect(screen.getByPlaceholderText('Your email')).toHaveValue('');
		expect(screen.getByPlaceholderText('Your message')).toHaveValue('');
	});
});
