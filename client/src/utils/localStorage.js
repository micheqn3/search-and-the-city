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

// Removes saved item ID
export const removeSavedId = (id) => {
  const savedIds = localStorage.getItem('saved_items')
    ? JSON.parse(localStorage.getItem('saved_items'))
    : null;

  if (!savedIds) {
    return false;
  }

  const updatedSavedIds = savedIds?.filter((savedID) => savedID !== id);
  localStorage.setItem('saved_items', JSON.stringify(updatedSavedIds));

  return true;
};


