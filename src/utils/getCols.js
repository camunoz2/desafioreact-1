export function getNumberOfColumns(width, BP_LG, BP_SM) {
  let gridColumnsConfiguration = "";
  if (width > BP_LG) {
    gridColumnsConfiguration = "repeat(3, 1fr)";
  } else if (width > BP_SM && width < BP_LG) {
    gridColumnsConfiguration = "repeat(2, 1fr)";
  } else {
    gridColumnsConfiguration = "1fr";
  }
  return gridColumnsConfiguration;
}
