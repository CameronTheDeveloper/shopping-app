import { describe, expect, it } from "vitest";
import ShopItemContainer from "../Components/ShopItemContainer/ShopItemContainer";
import { render, screen, act } from "@testing-library/react";

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
    },
    {
        key: 3,
        title: "Haa",
        price: 2.55
    }
];

vi.mock("../Components/ShopItem/ShopItem", () => ({
    default: ({ title, price }) => (
      <>
        {`${title} ${price}`}
      </>
    ),
}));
  
describe("ShopItemContainer", () => {
    it("renders a list element", () => {
        render(
            <ShopItemContainer 
                shopData={shopDataMock}
            ></ShopItemContainer>)
        const unorderedList = screen.getByRole("list");
        expect(unorderedList).toBeInTheDocument();
    });

    it("displays correct amount of items", async () => {
        await act ( async () => {
            render(<ShopItemContainer shopData={shopDataMock}></ShopItemContainer>)
        });
        const shopItems = screen.getAllByRole("listitem");
        expect(shopItems).toHaveLength(3);
    });

});