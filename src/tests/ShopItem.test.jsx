import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import ShopItem from '../Components/ShopItem/ShopItem';
import { describe, expect } from "vitest";

describe('ShopItem', () => {

    describe('item info', () => {
        it('displays title', () => {
            render(<ShopItem title="foo" price={53.5}></ShopItem>);
            const title = screen.getByRole("heading", { name: /foo/ });
            expect(title).toBeInTheDocument();
        });

        it('displays price', () => {
            render(<ShopItem title="foo" price={53.55}></ShopItem>);
            const price = screen.getByRole("heading", { name: /53.55/ });
            expect(price).toBeInTheDocument();
        });

        it('displays price with two decimal places if price is passed with only one decimal place', () => {
            render(<ShopItem title="foo" price={53.5}></ShopItem>);
            const price = screen.getByRole("heading", { name: /53.50/ });
            expect(price).toBeInTheDocument();
        });

        it('displays price with two decimal places if price is passed with no decimal places', () => {
            render(<ShopItem title="foo" price={53}></ShopItem>);
            const price = screen.getByRole("heading", { name: /53.00/ });
            expect(price).toBeInTheDocument();
        });

    });

    describe('item count input', () => {

        let user;

        beforeEach(() => {
            user = userEvent.setup();
            render(<ShopItem title="foo" price={53.55}></ShopItem>);
        });

        it('displays initial value of 0', () => {
            expect(screen.getByLabelText('amount').value).toBe("0");
        });

        describe('Increment button', () => {
            it('adds 1 after user clicks', async () => {
                const button = screen.getByRole('button', { name: /\+/i });
                await user.click(button);
                expect(screen.getByLabelText('amount').value).toBe("1");
            });
        })

        describe('Decrement button', () => {
            it('subtracts 1 after being clicked', async () => {
                const addButton = screen.getByRole('button', { name: /\+/i });
                const subtractButton = screen.getByRole('button', { name: /-/i });
                await user.click(addButton);
                await user.click(addButton);
                await user.click(addButton);
                await user.click(subtractButton);
                expect(screen.getByLabelText('amount').value).toBe("2");
            });
    
            it('does not decrement to less than 0', async () => {
                const subtractButton = screen.getByRole('button', { name: /-/i });
                await user.click(subtractButton);
                expect(screen.getByLabelText('amount').value).toBe("0");
                expect(subtractButton).toHaveAttribute("disabled");
            });
        })
    });

});