import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import '@testing-library/jest-dom'
import Todo from "./Todo";

describe('# message component check', () => {
  describe('1) Form test - Input functionality', () => {
    test('● Input tag must exist as a placeholder', () => {
      render(<Todo/>);
      const placeholderEl = screen.getByRole('textbox')
      expect(placeholderEl).toBeInTheDocument();
    })
    test('● Text "Input ToDos here." must exist as a placeholder', () => {
      render(<Todo/>);
      const placeholderEl = screen.getByRole('textbox', {placeholder: 'Input ToDos here.'})
      expect(placeholderEl).toBeInTheDocument();
    })

  })
  describe('2) Form test - Add functionality', () => {
    test('● Add button must update "enteredTodo"', async () => {
      render(<Todo/>);
      const input = screen.getByRole('textbox', {placeholder: 'Input ToDos here.'});
      const buttonEl = screen.getByRole('button', { name: 'Add' })

      userEvent.type(input, 'test value');
      userEvent.click(buttonEl);
      input.remove();

      const text = screen.getByText('test value');

      expect(text).toBeInTheDocument();
      expect(buttonEl).toBeInTheDocument();
    })
  })
  // describe('3) Form test - Done functionality', () => {
  //   test('● Done button must update "enteredTodo"', async () => {
  //     // const user = userEvent.setuo();
  //     render(<Todo/>);
  //     const input = screen.getByRole('textbox', {placeholder: 'Input ToDos here.'});
  //     const buttonAddEl = screen.getByRole('button', { name: 'Add' })
  //     // const buttonDoneEl = screen.getAllByRole('button', { role: 'deleteButton' })

  //     userEvent.type(input, 'test value');
  //     expect(input).toBeInTheDocument('test value');

  //     userEvent.click(buttonAddEl);
  //     input.remove();

  //     const text = screen.getByRole('heading', {name: 'test value'});

  //     // const buttonDoneEl = screen.getAllByRole('button', { role: 'deleteButton', name: 'Done' })

  //     // await user.click(buttonDoneEl[buttonDoneEl.length - 1]);
  //     // expect(text).toBeInTheDocument('');
  //   })
  // })
})
