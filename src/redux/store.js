import { legacy_createStore as createStore } from "redux";
import rootred from "./reducers/main";

const store = createStore(rootred);

export default store;
