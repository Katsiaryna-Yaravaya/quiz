import { createSelector } from "@reduxjs/toolkit";

export const getStateData = (state) => state.data;

export const usersId = createSelector(getStateData, (state) => state.credentialUser.map((item) => item.id));

export const usersName = createSelector([getStateData, usersId], (state, ids) => {
  const currentUserId = ids[state.currentUserIndex];
  return state.credentialUser.find((user) => user.id === currentUserId).name;
});
