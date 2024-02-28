import { describe, expect, it } from "vitest";
import ShoppingCart from "../Components/ShoppingCart/ShoppingCart";
import { render, screen } from "@testing-library/react";

describe("ShoppingCart", () => {

    it("renders shopping cart button to user", () => {
        render(<ShoppingCart></ShoppingCart>);

        const cartButton = screen.getByRole("button", {name: /Shopping Cart/i});
        expect(cartButton).toBeInTheDocument();
    })
})