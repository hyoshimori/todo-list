import { render, screen, cleanup } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import '@testing-library/jest-dom'
import Todo from "./Todo";


afterEach(cleanup);

describe('# message component check', () => {
  describe('3) Form test - Add functionality', () => {
    test('● Add button must update "enteredTodo"', async () => {
      render(<Todo/>);
      const input = screen.getByRole('textbox', {placeholder: 'Input ToDos here.'});
      const ButtonEl = screen.getByRole('button', { name: 'Add' })

      await userEvent.type(input, 'test value');
      await userEvent.click(ButtonEl);

      const spanEl = screen.getByText("test value");
      expect(input).toBeInTheDocument('test value');
      spanEl.remove();

      expect(ButtonEl).toBeInTheDocument();
      expect(input).toBeInTheDocument('test value');
    })
  })
})
