import { createSelector } from "@reduxjs/toolkit";

export const getContacts = (state) => state.phonebook.contactList;
export const getFilter = (state) => state.phonebook.filter;

export const getFilteredContacts = createSelector(
  [getContacts, getFilter],
  (contactList, filter) => {
    const normalizedFilter = filter.toLowerCase();
    return contactList.filter(({ name }) =>
      name.toLowerCase().includes(normalizedFilter)
    );
  }
);
