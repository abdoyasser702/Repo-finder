import { loaderElement } from "./elements";
import setSearchResult from "./setSearchResults";

export const setLoadingState = (loadingState) => {
  loaderElement.classList.toggle("hidden", !loadingState);
  loadingState && setSearchResult(null);
};
