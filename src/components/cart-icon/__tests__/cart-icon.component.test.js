import { screen } from "@testing-library/react";

import { renderWithProviders } from "../../../utils/test.utils";
import CartIcon from "../cart-icon.component";

describe("Cart Icon Tests", () => {
  test("Uses preloaded state to render", () => {
    const initialCartItems = [
      {
        id: 1,
        name: "Item 1",
        imageUrl: "test",
        price: 10,
        quantity: 1,
      },
    ];

    renderWithProviders(<CartIcon />, {
      preloadedState: {
        cart: {
          cartItems: initialCartItems,
        },
      },
    });

    const cartIconElement = screen.getByText("1");
    expect(cartIconElement).toBeInTheDocument();
  });
});
