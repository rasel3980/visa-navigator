import { useLoaderData, useNavigate } from "react-router-dom";
import { authContext } from "../AuthProvider/AuthProvider";
import { useContext } from "react";
import Swal, { SweetAlertPosition } from "sweetalert2";

interface VisaData {
  _id: string;
  country_image: string;
  country_name: string;
  visa_type: string;
  processing_time: string;
  description: string;
  age_restriction: string;
  fee: string;
  validity: string;
  application_method: string;
}

interface UpdatedVisa {
  country_image: string;
  country_name: string;
  visa_type: string;
  processing_time: string;
  description: string;
  age_restriction: string;
  fee: string;
  validity: string;
  application_method: string;
  email: string;
}

const Update = () => {
  const auth = useContext(authContext);
  const user = auth?.user;
  const data = useLoaderData() as VisaData;
  const navigate = useNavigate();

  const {
    _id,
    country_image,
    country_name,
    visa_type,
    processing_time,
    description,
    age_restriction,
    fee,
    validity,
    application_method,
  } = data;

  const handleUpdate = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    const form = e.currentTarget;

    const getValue = (name: string): string =>
      (form.elements.namedItem(name) as HTMLInputElement).value;

    const updatedVisa: UpdatedVisa = {
      country_image: getValue("country_image"),
      country_name: getValue("country_name"),
      visa_type: getValue("visa_type"),
      processing_time: getValue("processing_time"),
      description: getValue("description"),
      age_restriction: getValue("age_restriction"),
      fee: getValue("fee"),
      validity: getValue("validity"),
      application_method: getValue("application_method"),
      email: user?.email ?? "",
    };

    fetch(`https://visa-navigator-crud.vercel.app/update-visa/${_id}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(updatedVisa),
    })
      .then((res) => res.json())
      .then((data: { modifiedCount: number }) => {
        if (data.modifiedCount > 0) {
          Swal.fire({
            position: "top-center" as SweetAlertPosition,
            icon: "success",
            title: "Updated successfully",
            showConfirmButton: false,
            timer: 2000,
          });
        }
        form.reset();
        navigate("/all visas");
      })
      .catch((error: Error) => {
        console.log("ERROR", error);
      });
  };

  return (
    <div>
      <div className="container mx-auto p-4">
        <h2 className="text-3xl font-bold text-center mb-4">
          Enter Your Visa Information
        </h2>
        <form onSubmit={handleUpdate} className="space-y-4">
          <div className="form-control">
            <label className="label">Country Image</label>
            <input
              type="url"
              name="country_image"
              className="input input-bordered w-full"
              placeholder="Paste image URL here"
              required
              defaultValue={country_image}
            />
          </div>
          <div className="form-control">
            <label className="label">Country Name</label>
            <input
              type="text"
              name="country_name"
              className="input input-bordered w-full"
              placeholder="Enter country name"
              required
              defaultValue={country_name}
            />
          </div>
          <div className="form-control">
            <label className="label">Visa Type</label>
            <select
              name="visa_type"
              className="select select-bordered w-full"
              defaultValue={visa_type}
            >
              <option value="Tourist Visa">Tourist Visa</option>
              <option value="Student Visa">Student Visa</option>
              <option value="Official Visa">Official Visa</option>
            </select>
          </div>
          <div className="form-control">
            <label className="label">Processing Time</label>
            <input
              type="text"
              name="processing_time"
              className="input input-bordered w-full"
              placeholder="Enter processing time"
              required
              defaultValue={processing_time}
            />
          </div>
          <div className="form-control">
            <label className="label">Required Documents</label>
            <div className="flex flex-col">
              {[
                "Valid Passport",
                "Visa Application Form",
                "Recent Passport-Sized Photograph",
              ].map((doc: string) => (
                <label key={doc}>
                  <input type="checkbox" value={doc} className="checkbox" />
                  {doc}
                </label>
              ))}
            </div>
          </div>
          <div className="form-control">
            <label className="label">Description</label>
            <textarea
              name="description"
              className="textarea textarea-bordered w-full"
              placeholder="Enter a description"
              required
              defaultValue={description}
            />
          </div>
          <div className="form-control">
            <label className="label">Age Restriction</label>
            <input
              type="number"
              name="age_restriction"
              className="input input-bordered w-full"
              placeholder="Enter age restriction"
              required
              defaultValue={age_restriction}
            />
          </div>
          <div className="form-control">
            <label className="label">Fee</label>
            <input
              type="number"
              name="fee"
              className="input input-bordered w-full"
              placeholder="Enter visa fee"
              required
              defaultValue={fee}
            />
          </div>
          <div className="form-control">
            <label className="label">Validity</label>
            <input
              type="text"
              name="validity"
              className="input input-bordered w-full"
              placeholder="Enter validity"
              required
              defaultValue={validity}
            />
          </div>
          <div className="form-control">
            <label className="label">Application Method</label>
            <input
              type="text"
              name="application_method"
              className="input input-bordered w-full"
              placeholder="Enter application method"
              required
              defaultValue={application_method}
            />
          </div>
          <button type="submit" className="btn btn-primary mt-4 w-full">
            Update Visa
          </button>
        </form>
      </div>
    </div>
  );
};

export default Update;
