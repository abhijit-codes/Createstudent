import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";


export const createUser = createAsyncThunk("createUser", async (data, { rejectWithValue }) => {
  try {
    const response = await fetch("http://localhost:5000/users/", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });
    const result = await response.json();
    return result;
  } catch (error) {
    return rejectWithValue(error.message);
  }
});


export const ShowUser = createAsyncThunk("showUser", async (_, { rejectWithValue }) => {
  try {
    const response = await fetch("http://localhost:5000/users/");
    const result = await response.json();
    return result;
  } catch (error) {
    return rejectWithValue(error.message);
  }
});


export const deleteUser = createAsyncThunk("deleteUser", async (id, { rejectWithValue }) => {
  try {
    const response = await fetch(`http://localhost:5000/users/${id}`, {
      method: "DELETE",
    });
    const result = await response.json();
    return id; 
  } catch (error) {
    return rejectWithValue(error.message);
  }
});


export const updateUser = createAsyncThunk("updateUser", async (data, { rejectWithValue }) => {
  try {
    const response = await fetch(`http://localhost:5000/users/${data.id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });
    const result = await response.json();
    return result;
  } catch (error) {
    return rejectWithValue(error.message);
  }
});

export const userDetail = createSlice({
  name: "userDetail",
  initialState: {
    users: [],
    loading: false,
    error: null,
    searchData:[],
  },
  reducers : {
    searchUser : (state,action)=>{
      state.searchData=action.payload;
    }

  },
  extraReducers: (builder) => {
    builder
      
      .addCase(createUser.pending, (state) => {
        state.loading = true;
      })
      .addCase(createUser.fulfilled, (state, action) => {
        state.loading = false;
        state.users.push(action.payload);
      })
      .addCase(createUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })

      
      .addCase(ShowUser.pending, (state) => {
        state.loading = true;
      })
      .addCase(ShowUser.fulfilled, (state, action) => {
        state.loading = false;
        state.users = action.payload;
      })
      .addCase(ShowUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })

     
      .addCase(deleteUser.pending, (state) => {
        state.loading = true;
      })
      .addCase(deleteUser.fulfilled, (state, action) => {
        state.loading = false;
        state.users = state.users.filter(user => user.id !== action.payload);
      })
      .addCase(deleteUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })

      
      .addCase(updateUser.pending, (state) => {
        state.loading = true;
      })
      .addCase(updateUser.fulfilled, (state, action) => {
        state.loading = false;
        const index = state.users.findIndex(user => user.id === action.payload.id);
        if (index !== -1) {
          state.users[index] = action.payload;
        }
      })
      .addCase(updateUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});
export const { searchUser } = userDetail.actions;
export default userDetail.reducer;


