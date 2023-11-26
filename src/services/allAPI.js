

// upload employee details

import { commonAPI } from "./commonAPI"
import { serverURL } from "./serverURl"


// add employee

export const uploadEmployee = async(reqBody)=>{
    return await commonAPI("POST",`${serverURL}/employee`,reqBody)
}


// view uploaded employee 

export const getEmployee = async()=>{
   return await commonAPI("GET",`${serverURL}/employee`,"")
}

// Update employee 
export const updateAnEmpDetails = async(id,body)=>{
    return await commonAPI('PUT',`${serverURL}/employee/${id}`,body)
 }

// delete a employee

export const deleteEmployee = async(id)=>{
return await commonAPI("DELETE",`${serverURL}/employee/${id}`,{})
}

