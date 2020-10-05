const context = Object.create(null);

export const createContext = (newContext = {}) => {
  return Object.assign(context, newContext);
};

export default context;
