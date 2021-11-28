import { createSelector } from "@reduxjs/toolkit";

export const getContacts = (state) => state.contacts.contactList;
export const getFilter = (state) => state.contacts.filter;

export const getFilteredContacts = createSelector(
  [getContacts, getFilter],
  (contactList, filter) => {
    let normalizedFilter = filter.toLowerCase();
    return contactList.filter(({ name }) =>
      name.toLowerCase().includes(normalizedFilter)
    );
  }
);
