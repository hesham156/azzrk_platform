import axios from "axios";

export const api = async (url,data,dispatch) => {
  console.log(data[0]);
  try {
    const res = (await axios.put(`https://azzrk-api.onrender.com/${url}`,data));
    console.log(res);
    
  } catch (err) {
    console.log(err);
  }
};
