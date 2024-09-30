export default function cartReducer(state, action) {
  switch (action.type) {
    case "added": {
      const existingItem = state.find((item) => item.id === action.id);

      if (existingItem) {
        return state.map((item) =>
          item.id === action.id ? { ...item, count: item.count + 1 } : item
        );
      } else {
        const newItem = action.item;
        return [...state, { ...newItem, count: 1 }];
      }
    }

    case "removed": {
      const existingItem = state.find((item) => item.id === action.id);

      if (existingItem && existingItem.count > 1) {
        return state.map((item) =>
          item.id === action.id ? { ...item, count: item.count - 1 } : item
        );
      } else {
        return state.filter((item) => item.id !== action.id);
      }
    }

    case "checkout": {
      return [];
    }

    default:
      return state;
  }
}
