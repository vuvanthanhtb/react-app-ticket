import { createSlice } from '@reduxjs/toolkit';

const loadingSlice = createSlice({
	name: 'loading',
	initialState: {
		isLoading: 0,
	},
	reducers: {
		setLoading: (state, action) => {
			const count = state.isLoading + action.payload;
			state.isLoading = count > 0 ? count : 0;
		},
	},
});

export const { setLoading } = loadingSlice.actions;
export default loadingSlice.reducer;
