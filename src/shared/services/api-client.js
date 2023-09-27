// Backend API / WEB SERVICES / WEB API           calls will be here
import axios from "axios";

export const getNotes = async () => {
  try {
    const URL = process.env.REACT_APP_NOTES_URL;
    const response = await axios.get(URL);
    return response.data.notes;
  } catch (err) {
    throw err;
  }
};

export const addNotes = async (NotesData) => {
  try {
    const URL = process.env.REACT_APP_NOTES_ADDDATA_URL;
    const response = await axios.post(URL, NotesData);
    return response.data;
  } catch (err) {
    throw err;
  } 
};
