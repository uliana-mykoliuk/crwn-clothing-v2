import { fireEvent, screen } from "@testing-library/react";
import { renderWithProviders } from "../../../utils/test.utils";
import ProductCard from "../product-card.component";

describe("Product Card Tests", () => {
  test("It should add the product item when Product Card button is clicked", async () => {
    const mockProduct = {
      id: 1,
      imageUrl: "test",
      name: "test",
      price: 10,
    };

    const { store } = renderWithProviders(
      <ProductCard product={mockProduct} />,
      {
        preloadedState: {
          cart: {
            cartItems: [],
          },
        },
      }
    );

    const addToCartButtonElement = screen.getByText(/add to cart/i);
    await fireEvent.click(addToCartButtonElement);

    expect(store.getState().cart.cartItems.length).toBe(1);
  });
});
