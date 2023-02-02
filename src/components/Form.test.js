import { render, screen } from "@testing-library/react";
import '@testing-library/jest-dom'
import Form from "./Form";
// import userEvent from "@testing-library/user-event";

describe('message component check', () => {
  describe('Form test, input and submit functionality', () => {
    test('Text "Input ToDos here." must exist as a placeholder', () => {
      render(<Form/>);
      const placeholderEl = screen.getByRole('textbox', {placeholder: 'Input ToDos here.'})
      expect(placeholderEl).toBeInTheDocument();
    })
  })
})
