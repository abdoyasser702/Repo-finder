import {
  buttonElement,
  searchInput,
  usersInputElement,
} from "./scripts/elements.js";
import performSearch from "./scripts/performSearch.js";

buttonElement.addEventListener("click", (event) => {
  event.preventDefault();
  performSearch(searchInput.value, usersInputElement.checked);
});
