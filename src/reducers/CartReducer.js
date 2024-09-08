export default function cartReducer(cart, action) {
  switch (action.type) {
    case "added": {
      return cart.map((item) => {
        if (item.id === action.id) {
          return { ...item, count: item.count + 1 };
        }
        return item;
      });
    }
    case "removed": {
      let updatedCart = cart.map((item) => {
        if (item.id === action.id) {
          return { ...item, count: item.count - 1 };
        }
        return item;
      });

      return updatedCart.filter((item) => item.count > 0);
    }
    default:
      return cart;
  }
}
