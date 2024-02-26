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
    it("renders a list element", () => {
        render(
            <ShopItemContainer 
                shopData={shopDataMock}
            ></ShopItemContainer>)
        const unorderedList = screen.getByRole("list")
        expect(unorderedList).toBeInTheDocument();
    })

});