import React, { useState } from 'react'

const useBase64 = () => {
    const [base64,setBase64] = useState()
    const [file,setfile] = useState()
     console.log("hesham",file);
    const getBase64 = (file) => {
        return new Promise((resolve, reject) => {
          const reader = new FileReader();
          reader.onload = () => resolve(reader.result);
          reader.onerror = (error) => reject(error);
          if(file){reader.readAsDataURL(file)}
        });
      };
        getBase64(file).then((base64) => {
        localStorage["fileBase64"] = base64;
        setBase64(base64)
      });
      return {base64,setfile}
}

export default useBase64