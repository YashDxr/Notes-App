import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { addNotes, getNotes } from "../../../shared/services/api-client";


export const getNotesFromAPI = createAsyncThunk('/note/get-note', async ()=>{
    try{
        const notes = await getNotes();
        return notes;
    }catch(err){
        throw err;
    }
    
})

export const noteAdd = createAsyncThunk('/note/add', async (noteData) => {
    try{
        const data = await addNotes(noteData);
        return data;
    }catch(err){
        throw err;
    }
})

const noteSlice = createSlice({
    name: "noteSlice",
    initialState: {
        notes:[], total:0, markedNotes:0, isLoading:false, error:null, message:''
    },
    reducers:{
        addNote(state,action){
            state.notes.push(action.payload);
            state.message = "Note Added...";

        },
        removeNote(state,action){

        },
        updateNote(state,action){

        },
        searchNote(state,action){

        }
    },
    extraReducers:(builder) => {
        builder
        .addCase(getNotesFromAPI.pending, (state,action) => {
            state.isLoading = true;
        })
        .addCase(getNotesFromAPI.fulfilled,(state,action) => {
            state.isLoading = false;
            state.notes = [ ...state.notes, ...action.payload];
        })
        .addCase(getNotesFromAPI.rejected)




        
        builder
        .addCase(noteAdd.pending,(state,action) => {
            state.isLoading = true;
            state.error = action.payload;
            
        })
        .addCase(noteAdd.fulfilled,(state,action) => {
            state.isLoading = false;
            state.notes.push(action.payload);
            // state.notes = [ ...state.notes, ...action.payload];
        })
        .addCase(noteAdd.rejected,(state,action) => {
            state.isLoading = false;
            state.error = action.payload;
        })
    }
});

export default noteSlice.reducer;
export const {addNote,removeNote,searchNote,updateNote} = noteSlice.actions;