import { useContext } from "react";
import Context from "./Context";

const Child2=()=>{
    let {formValues}=useContext(Context)
    return (
        <>
        <div className="row mt-5">
            
               <div >
               <p>first Name:<strong>{formValues.firstName}</strong></p>
                <p>Middle Name:<strong>{formValues.middleName}</strong></p>
                <p>Last Name:<strong>{formValues.lastName}</strong></p>
                <p>Gender:<strong>{formValues.gender}</strong></p>
                <p>Specify Gender:<strong>{formValues.specifyGender}</strong></p>
               </div>

        </div>
        </>
    )
}
export default Child2;