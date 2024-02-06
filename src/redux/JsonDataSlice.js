import { createSelector, createSlice } from "@reduxjs/toolkit"
import { remove } from "remove-accents"
const initialState = {
  header: [],
  content: [],
  footer: [],
  filter: "",
}

export const JsonDataSlice = createSlice({
  name: "account",
  initialState,
  reducers: {
    HeaderData: (state, action) => {
      state.header = action.payload
    },
    ContentData: (state, action) => {
      state.content = action.payload
    },
    FooterData: (state, action) => {
      state.footer = action.payload
    },
    FilterText: (state, action) => {
      state.filter = action.payload
    },
  },
})

// Seletor
const dataContent = (state) => state.json.content.product
const filterTextContent = (state) => state.json.filter

export const listFilterChanges = createSelector(
  dataContent,
  filterTextContent,
  (listData, text) => {
    if (text) {
      return listData.filter((item) => {
        return remove(item.product_name)
          .toLocaleLowerCase()
          .includes(remove(text).toLocaleLowerCase())
      })
    }
    return null
  }
)

// Action creators are generated for each case reducer function

export const { HeaderData, ContentData, FooterData, FilterText } =
  JsonDataSlice.actions

export default JsonDataSlice
