import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import CartItem from '../Components/CartItem/CartItem';

describe('Cart Item', () => {
    describe('item count input', () => {
        it('increment button adds 1', async () => {
            const user = userEvent.setup();

            render(<CartItem></CartItem>);
            const button = screen.getByRole('button', { name: /\+/i });
            await user.click(button);

            expect(screen.getByLabelText('amount').value).toBe("1");

        });
    });

});