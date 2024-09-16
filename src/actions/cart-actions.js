export function handleAddToCart(dispatch) {
  return (item) => {
    dispatch({
      type: "added",
      id: item.id,
      item: item,
    });
  };
}

export function handleRemoveFromCart(dispatch) {
  return (item) => {
    dispatch({
      type: "removed",
      id: item.id,
      item: item,
    });
  };
}
