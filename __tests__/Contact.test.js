const { render, screen } = require("@testing-library/react");
import ContactUs from "./../src/components/ContactUs";
import "@testing-library/jest-dom";


test("Should load contact us component", () => {
    render(<ContactUs />);

    const heading = screen.getByRole('heading');
    // Asseertion
    expect(heading).toBeInTheDocument();
});

test("Should load input name in contact us component", () => {
    render(<ContactUs />);

    const inputName = screen.getByPlaceholderText('name');
    // Asseertion
    expect(inputName).toBeInTheDocument();
});

test("Should load 2 input boxs in contact us component", () => {
    render(<ContactUs />);

    const inputName = screen.getAllByRole('textbox');
    // Asseertion
    expect(inputName.length).toBe(2);
})