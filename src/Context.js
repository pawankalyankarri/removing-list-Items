import { createContext, useState } from "react";

        let defaultValues={
            firstName:'',
            middleName:'',
            lastName:'',
            gender:'',
            specifyGender:''
        }

const Context=createContext();
const Provider=({children})=>{
    let [formValues,setFormValues]=useState(defaultValues);

    let valueToShare={
        formValues,
        handleFormValues:(name,value)=>{
            setFormValues({...formValues,[name]:value})
        },
        clearFormValues:()=>{
            setFormValues(defaultValues)
        }
    }
    return(
        <Context.Provider value={valueToShare}>{children}</Context.Provider>
    )
    
}
export {Provider};
export default Context;