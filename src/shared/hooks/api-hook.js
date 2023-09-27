// API Hook for API calls

import { addNotes, getNotes } from "../services/api-client"

export const useApi = (method) => {
    const apiCall = async (data = {}) => {
        if(method === 'GET'){
            return await getNotes();
        }
        else if(method === 'POST'){
            const note =  await addNotes(data);
            if(note && note.title){
                return {message: 'Note added successfully'};
            }
            else{
                return {message: 'Some error occurred'};
            }
        }
    }
    return apiCall;
}