import { createSelector } from "@reduxjs/toolkit";

export const getStateData = (state) => state.data;

export const usersId = createSelector(getStateData, (state) => state.credentialUser.map((item) => item.id));
