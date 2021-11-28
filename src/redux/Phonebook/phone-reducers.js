import { createReducer } from "@reduxjs/toolkit";
import { combineReducers } from "redux";
import { fetchContacts, addContact, deleteContact } from "./phone-operations";
import changeFilter from "./phone-actions";

const contactList = createReducer([], {
  [fetchContacts.fulfilled]: (_, { payload }) => payload,
  [addContact.fulfilled]: (state, { payload }) => [payload, ...state],
  [deleteContact.fulfilled]: (state, action) => {
    return state.filter((contact) => contact.id !== action.payload);
  },
});

const filter = createReducer("", {
  [changeFilter]: (_state, { payload }) => payload,
});

export default combineReducers({ contactList, filter });
