import { fireEvent, render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import '@testing-library/jest-dom'
import Form from "./Form";

describe('# message component check', () => {
  describe('1) Form test - Input functionality', () => {
    test('● Input tag must exist as a placeholder', () => {
      render(<Form/>);
      const placeholderEl = screen.getByRole('textbox')
      expect(placeholderEl).toBeInTheDocument();
    })
    test('● Text "Input ToDos here." must exist as a placeholder', () => {
      render(<Form/>);
      const placeholderEl = screen.getByRole('textbox', {placeholder: 'Input ToDos here.'})
      expect(placeholderEl).toBeInTheDocument();
    })

  })
  describe('2) Form test - Button functionality', () => {
    test('● Button add must update "enteredTodo"', () => {
      render(<Form/>);
      const input = screen.getByRole('textbox');
      const ButtonEl = screen.getByRole('button')
      userEvent.type(input, 'test value');
      expect(ButtonEl).toBeInTheDocument('test value');
    })
  })
})
