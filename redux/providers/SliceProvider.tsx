import React, { createContext, useContext } from "react";
import { useAppSelector } from "@/redux/hooks";

// Create a context for our slice.
type TCustomContext = {
  [key: string]: any; // 👈️ variable key
};

// Create a context for our slice.
const context: TCustomContext = {};
const SliceContext = createContext({ ...context });

// Create a provider for components to consume and subscribe to changes.
const SliceProvider = ({
  slice,
  children
}: {
  slice: any;
  children: React.ReactNode;
}) => {
  return (
    <SliceContext.Provider value={slice}>{children}</SliceContext.Provider>
  );
};

// Create custom hooks to use slice context.
const useSliceActions = () => useContext(SliceContext).actions;
const useSliceSelector = () => {
  const { name } = useContext(SliceContext);
  // @ts-ignore
  return useAppSelector((state) => state[name]);
};

// Export slice provider and custom hooks.
export default SliceProvider;
export { useSliceActions, useSliceSelector };
