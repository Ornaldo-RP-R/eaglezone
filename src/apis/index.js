import { getDefaultModules } from "../helpers";

const moduleContext = import.meta.globEager("./*.js");
const modules = getDefaultModules(moduleContext);
const mergedModules = Object.assign({}, ...Object.values(modules).filter(Boolean));
export default mergedModules;
