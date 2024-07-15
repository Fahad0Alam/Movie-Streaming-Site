import { createSlice} from "@reduxjs/toolkit";

const userSlice = createSlice({
    name : "user",
    initialState:{
        name : null,
        email: null,
        password:null,
        isLoading : false
    },
    reducers:{
        setUser : (state,action) => {
            if (action.payload === null) {
                state.name = null;
                state.email = null;
                state.password = null;
            }
            else{        
            state.name = action.payload.user.name;
            state.email = action.payload.user.email;
            state.password = action.payload.user.password;
            }
        },
        setisLoading : (state,action) => {
            state.isLoading = action.payload;
            console.log('isLoading',state.isLoading);
        }
    }
});

export const {setUser,setisLoading} = userSlice.actions;
export default userSlice.reducer;
