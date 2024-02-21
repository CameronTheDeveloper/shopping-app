import { render, screen } from "@testing-library/react";
import ShopPage from "../Components/ShopPage/ShopPage";


describe('ShopPage', () => {

    it('displays loading message before shop data is fetched', () => {
        render(<ShopPage></ShopPage>);
        expect(screen.getByRole("heading").textContent).toMatch(/loading shop products/i);
    });
});