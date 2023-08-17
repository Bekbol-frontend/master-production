import { createSlice } from "@reduxjs/toolkit";

interface IState {
  collapsed: boolean;
}

const initialState: IState = {
  collapsed: false,
};

const collepsedSlice = createSlice({
  name: "collepsedSlice",
  initialState,
  reducers: {
    setCollapsed(state) {
      state.collapsed = !state.collapsed;
    },
  },
});

export const { setCollapsed } = collepsedSlice.actions;

export default collepsedSlice.reducer;
