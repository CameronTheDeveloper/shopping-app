import { render } from "@testing-library/react";
import HomePage from "../Components/HomePage/HomePage";

describe("HomePage component", () => {
    it("renders correct content", () => {
        const { asFragment } = render(<HomePage></HomePage>);
        expect(asFragment()).toMatchSnapshot();
    });
});
