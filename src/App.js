import { useContext } from "react";
import "./App.css";
import Context from "./Context";
import Child1 from "./Child1";

function App() {
  let { formValues, handleFormValues, clearFormValues } = useContext(Context);

      function onInputChange(e){
        handleFormValues(e.target.name,e.target.value)
      }

  function handleSubmit(e) {
    e.preventDefault();
    window.alert(
      `firstName:${formValues.firstName},
      middleName:${formValues.middleName},
      lastName:${formValues.lastName},
      gender:${formValues.gender},
      specifyGender:${formValues.specifyGender}`
    );
  }
  return (
    <div className="container mt-3 ">
      <form onSubmit={handleSubmit}>
        <div className="row">
          <div className="col-12 text-center mb-2">
            <h2>Registration Form</h2>
          </div>
          <div className="col-4">
            <label htmlFor="firstName" className="form-label">
              First Name
            </label>
            <input
              type="text"
              className="form-control"
              id="firstName"
              name="firstName"
              value={formValues.firstName}
              onChange={onInputChange}
            />
          </div>
          <div className="col-4">
            <label htmlFor="middleName" className="form-label">
              Middle Name
            </label>
            <input
              type="text"
              className="form-control"
              id="middleName"
              name="middleName"
              value={formValues.middleName}
              onChange={onInputChange}
            />
          </div>
          <div className="col-4">
            <label htmlFor="lastName" className="form-label">
              Last Name
            </label>
            <input
              type="text"
              className="form-control"
              id="lastName"
              name="lastName"
              value={formValues.lastName}
              onChange={onInputChange}
            />
          </div>
          <div className="col-4">
            <label htmlFor="gender" className="form-label">
              Gender
            </label>
            <select
              className="form-select"
              id="gender"
              name="gender"
              value={formValues.gender}
              onChange={onInputChange}
            >
              <option value={""}>None</option>
              <option value={"male"}>Male</option>
              <option value={"female"}>Female</option>
              <option value={"other"}>Other</option>
            </select>
          </div>
         {formValues.gender==='other'&&( <div className="col-4">
            <label htmlFor="specifyGender" className="form-label">
              if Otehr,then specify
            </label>
            <textarea
              className="form-control"
              id="specifyGender"
              name="specifyGender"
              rows={4}
              value={formValues.specifyGender}
              onChange={onInputChange}
            />
          </div>)}
          <div className="col-12 mt-3">
            <div className="row">
              <div className="col-auto">
                <input type="submit" className="btn btn-success" />
              </div>
              <div className="col-auto">
                <input
                  type="reset"
                  className="btn btn-danger"
                  onClick={clearFormValues}
                />
              </div>
            </div>
          </div>
        </div>
      </form>
      <Child1/>
    </div>
  );
}

export default App;
