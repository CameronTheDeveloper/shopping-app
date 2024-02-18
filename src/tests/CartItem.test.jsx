import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import ShopItem from '../Components/ShopItem/ShopItem';

describe('Cart Item', () => {
    describe('item count input', () => {

        let user;

        beforeEach(() => {
            user = userEvent.setup();
            render(<ShopItem></ShopItem>);
        });

        it('displays initial value of 0', () => {
            expect(screen.getByLabelText('amount').value).toBe("0");
        });

        it('increment button adds 1', async () => {
            const button = screen.getByRole('button', { name: /\+/i });
            await user.click(button);
            expect(screen.getByLabelText('amount').value).toBe("1");
        });

        it('decrement button subtracts 1', async () => {
            const addButton = screen.getByRole('button', { name: /\+/i });
            const subtractButton = screen.getByRole('button', { name: /-/i });
            await user.click(addButton);
            await user.click(addButton);
            await user.click(addButton);
            await user.click(subtractButton);
            expect(screen.getByLabelText('amount').value).toBe("2");
        });

        it('decrement button does not decrement to less than 0', async () => {
            const subtractButton = screen.getByRole('button', { name: /-/i });
            await user.click(subtractButton);
            expect(screen.getByLabelText('amount').value).toBe("0");
        });
    });

});