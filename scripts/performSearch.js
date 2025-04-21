import setSearchResult from "./setSearchResults";
import { setMessage } from "./setMessage";
import { getMessage } from "./getMessage";
import { setLoadingState } from "./setLoadingState";

const USERS_API = "https://api.github.com/search/users?q=";
// const USERS_API = "https://api.github.com/search/users?q=apple+users";

const performSearch = (searchTerm, isUserSelected) => {
  getMessage() && setMessage("");
  const typeQuery = isUserSelected ? "+type:user" : "+type:org";

  if (!searchTerm.trim()) {
    setMessage("please fill out the search field");
    return;
  }

  setLoadingState(true);

  fetch(`${USERS_API}${searchTerm}${typeQuery}`)
    .then((result) => result.json())
    .then((response) => setSearchResult(response.items)) //map loops around items
    .finally(() => setLoadingState(false));
};

export default performSearch;
