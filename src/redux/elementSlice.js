import { createSlice, current, PayloadAction } from "@reduxjs/toolkit";
const data = JSON.parse(localStorage.getItem("state"));
// localStorage.setItem('menu',JSON.stringify([{url:"sfsfddd",text:"sfsfsf"},{url:"sfsfsf",text:"ddsfsfd"}]))
const menu = JSON.parse(localStorage.getItem("menu"));

console.log(data);
export const elementSlice = createSlice({
  name: "element",
  initialState: {
    global: {},
    logo: {
      img: data?.logo,
      logoWidth: data?.width,
    },
    menu: {
      lnk: menu,
    },
    btns: {},
    type: "global",
  },
  reducers: {
    ctype: (state, action) => {
      state.type = action.payload.type;
    },
    clogo: (state, action) => {
      state.logo.img = action.payload.logo;
      state.logo.logoWidth = action.payload.logoWidth;
    },
    saveLocal: (state) => {
      localStorage.setItem(
        "state",
        JSON.stringify({ logo: state.logo.img, width: state.logo.logoWidth })
      );
    },
    cmenu: (state, action) => {
      state.menu.lnk[action.payload.index].text = action.payload.text;
      state.menu.lnk[action.payload.index].url = action.payload.url;
    },
    addmenu: (state, action) => {
      state.menu.lnk[action.payload.index].active = true;
      localStorage.setItem("menu", JSON.stringify(current(state).menu.lnk));
    },
    rmenu: (state, action) => {
      state.menu.lnk[action.payload.index].active = false;
      localStorage.setItem("menu", JSON.stringify(current(state).menu.lnk));
    },
  },
});
console.log(data?.logo);
export const { clogo, saveLocal, ctype, cmenu, rmenu, addmenu } =
  elementSlice.actions;
export default elementSlice.reducer;
