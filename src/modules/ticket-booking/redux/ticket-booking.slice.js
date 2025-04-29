import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import TicketBookingService from "../services";

const service = new TicketBookingService();

export const fetchTickets = createAsyncThunk(
  "tickets/fetchTickets",
  async () => {
    console.log("Fetching tickets...");
    const data = await service.search();
    return data;
  }
);

export const createNewTicket = createAsyncThunk(
  "tickets/createNewTicket",
  async (payload, thunkAPI) => {
    const data = await service.create(payload);
    if (data && data.id) {
      thunkAPI.dispatch(fetchTickets());
    }
    return data;
  }
);

export const updateTicket = createAsyncThunk(
  "tickets/updateTicket",
  async (payload, thunkAPI) => {
    const data = await service.update(payload);
    if (data && data.id) {
      thunkAPI.dispatch(fetchTickets());
    }
    return data;
  }
);

export const deleteTicket = createAsyncThunk(
  "tickets/deleteTicket",
  async (payload, thunkAPI) => {
    const data = await service.delete(payload);
    thunkAPI.dispatch(fetchTickets());
    return data;
  }
);

const initialState = {
  tickets: [],
  isCreateSuccess: false,
  isUpdateSuccess: false,
  isDeleteSuccess: false,
};

const ticketBookingSlice = createSlice({
  name: "ticketBooking",
  initialState,
  reducers: {
    resetCreateSuccess: (state) => {
      state.isCreateSuccess = false;
    },
    resetUpdateSuccess: (state) => {
      state.isUpdateSuccess = false;
    },
    resetDeleteSuccess: (state) => {
      state.isDeleteSuccess = false;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchTickets.fulfilled, (state, action) => {
        state.tickets = action.payload || [];
      })
      .addCase(createNewTicket.fulfilled, (state) => {
        state.isCreateSuccess = true;
      })
      .addCase(updateTicket.fulfilled, (state) => {
        state.isUpdateSuccess = true;
      })
      .addCase(deleteTicket.fulfilled, (state) => {
        state.isDeleteSuccess = true;
      });
  },
});

export const { resetCreateSuccess, resetUpdateSuccess, resetDeleteSuccess } =
  ticketBookingSlice.actions;

export default ticketBookingSlice.reducer;
