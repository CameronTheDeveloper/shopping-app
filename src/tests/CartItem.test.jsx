import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import CartItem from '../Components/CartItem/CartItem';

describe('Cart Item', () => {
    describe('item count input', () => {

        let user;

        beforeEach(() => {
            user = userEvent.setup();
            render(<CartItem></CartItem>);
        });

        it('displays initial value of 0', () => {
            expect(screen.getByLabelText('amount').value).toBe("0");
        });

        it('increment button adds 1', async () => {
            const button = screen.getByRole('button', { name: /\+/i });
            await user.click(button);
            expect(screen.getByLabelText('amount').value).toBe("1");
        });
    });

});