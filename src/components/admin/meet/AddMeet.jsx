// import React from "react";
// import { Formik, Form, Field } from "formik";
// import { Button } from "react-bootstrap";

// const AddMeet = () => {
//   const initialValues = {
//     meetLink: "",
//     startTime: "",
//     endTime: "",
//   };

//   const handleSubmit = (values) => {
//     // Handle form submission here
//     console.log(values);
//   };

//   return (
//     <div className="container mt-5">
//       <h1 className="mb-4">Add Meet</h1>
//       <Formik initialValues={initialValues} onSubmit={handleSubmit}>
//         <Form>
//           <div className="mb-3">
//             <label htmlFor="meetLink" className="form-label">
//               Meet Link
//             </label>
//             <Field
//               type="text"
//               name="meetLink"
//               className="form-control"
//               placeholder="Enter meet link"
//             />
//           </div>
//           <div className="mb-3">
//             <label htmlFor="startTime" className="form-label">
//               Start Time
//             </label>
//             <Field
//               type="datetime-local"
//               name="startTime"
//               className="form-control"
//             />
//           </div>
//           <div className="mb-3">
//             <label htmlFor="endTime" className="form-label">
//               End Time
//             </label>
//             <Field
//               type="datetime-local"
//               name="endTime"
//               className="form-control"
//             />
//           </div>
//           <Button type="submit" variant="primary">
//             Join
//           </Button>
//         </Form>
//       </Formik>
//     </div>
//   );
// };

// export default AddMeet;

import { Field, Form, Formik } from "formik";
import React from "react";
import { Button } from "react-bootstrap";
import { token } from "../../../utils/authentication";
import { toast } from "react-hot-toast";

const AddMeet = () => {
  const initialValues = {
    meetLink: "",
    startTime: "",
    endTime: "",
  };

  const handleSubmit = async (values) => {
    // console.log(token());
    // console.log(values);
    const response = await fetch(
      `${process.env.REACT_APP_API_BASE_URL}/meet/create`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token()}`,
        },
        body: JSON.stringify(values), // Pass the values in the request body
      }
    );
    if (response.status === 200) {
      toast.success('Meet added successfully')
      // reset the form
      values.meetLink = "";
      values.startTime = "";
      values.endTime = "";
    }
  };

  return (
    <div className="container mt-5">
      <h1 className="mb-4">Add Meet</h1>
      <Formik initialValues={initialValues} onSubmit={handleSubmit}>
        <Form>
          <div className="mb-3">
            <label htmlFor="meetLink" className="form-label">
              Meet Link
            </label>
            <Field
              type="text"
              name="meetLink"
              className="form-control"
              placeholder="Enter meet link"
            />
          </div>
          <div className="mb-3">
            <label htmlFor="startTime" className="form-label">
              Start Time
            </label>
            <Field
              type="datetime-local"
              name="startTime"
              className="form-control"
            />
          </div>
          <div className="mb-3">
            <label htmlFor="endTime" className="form-label">
              End Time
            </label>
            <Field
              type="datetime-local"
              name="endTime"
              className="form-control"
            />
          </div>
          <Button type="submit" variant="primary">
            Add Meet
          </Button>
        </Form>
      </Formik>
    </div>
  );
};

export default AddMeet;
