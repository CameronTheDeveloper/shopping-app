import { describe, expect, it } from "vitest";
import ShopItemContainer from "../Components/ShopItemContainer/ShopItemContainer";
import { render, screen } from "@testing-library/react";

const shopDataMock = [
    {
        key: 1,
        title: "Foo",
        price: 5.55
    },
    {
        key: 2,
        title: "Bar",
        price: 2.55
    }
];

vi.mock("../Components/ShopItem/ShopItem", () => ({
    default: ({ title, price }) => (
      <li>
        {`${title} ${price}`}
      </li>
    ),
}));
  
describe("ShopItemContainer", () => {
    it("displays shop products to the user when passed shop data", () => {
        render(
        <ShopItemContainer 
            shopData={shopDataMock}
        ></ShopItemContainer>)
        const item1 = screen.getByRole("listitem", {name: /Foo 5.55/i});
        const item2 = screen.getByRole("listitem", {name: /Bar 2.55/i});
        expect(item1).toBeInTheDocument();
        expect(item2).toBeInTheDocument();
    });
});