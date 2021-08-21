// Keeps track of user's saved items

// Retrieves saved item IDs 
export const getSavedIds = () => {
  const savedIds = localStorage.getItem('saved_items')
    ? JSON.parse(localStorage.getItem('saved_items'))
    : [];
  return savedIds;
};
  
// Save items to local storage if there are items in array
export const saveIds = (arr) => {
  if (arr.length) {
    localStorage.setItem('saved_items', JSON.stringify(arr));
  } else {
    localStorage.removeItem('saved_items');
  }
};


