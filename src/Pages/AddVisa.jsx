import React, { useContext } from 'react';
import Swal from 'sweetalert2'
import { Fade } from "react-awesome-reveal";

import { authContext } from '../AuthProvider/AuthProvider';

const AddVisa = () => {
  const {user} = useContext(authContext);

    const handleAddVisa=(e)=>{
        e.preventDefault();
        const form = e.target;
        const country_image = form.country_image.value;
        const country_name = form.country_name.value;
        const visa_type = form.visa_type.value;
        const processing_time = form.processing_time.value;
        const description = form.description.value;
        const age_restriction = form.age_restriction.value;
        const fee = form.fee.value;
        const validity = form.validity.value;
        const application_method = form.application_method.value;
      const email = user.email;
        const newVisa = {country_image,country_name,visa_type,processing_time,description,age_restriction,fee,validity,application_method,email};

        // console.log(newVisa);

        fetch('https://visa-navigator-crud.vercel.app/visa',{
            method:"POST",
            headers:{
                'content-type':'application/json'
            },
            body:JSON.stringify(newVisa)
        })
        .then(res=> res.json())
        .then(data=>{
            // console.log(data);
            if(data.insertedId){
                Swal.fire({
                    title: 'Success!',
                    text: 'Visa added Successfully',
                    icon: 'success',
                    confirmButtonText: 'Cool'
                  })
            }
        })

    }
    return (
        <div className="container mx-auto p-4">
      <h2 className="text-3xl font-bold text-center mb-4"><Fade>
      Enter Your Visa Information
    </Fade> </h2>
      
      <form onSubmit={handleAddVisa} className="space-y-4">
        <div className="form-control">
          <label className="label">Country Image</label>
          <input
            type="url"
            name="country_image"
            
            className="input input-bordered w-full"
            placeholder="Paste image URL here"
            required
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
          />
        </div>

        <div className="form-control">
          <label className="label">Visa Type</label>
          <select
            name="visa_type"
            
            className="select select-bordered w-full"
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
          />
        </div>

        <div className="form-control">
          <label className="label">Required Documents</label>
          <div className="flex flex-col">
            <label>
              <input
                type="checkbox"
                value="Valid Passport"
                
                className="checkbox"
              />
              Valid Passport
            </label>
            <label>
              <input
                type="checkbox"
                value="Visa Application Form"
                
                className="checkbox"
              />
              Visa Application Form
            </label>
            <label>
              <input
                type="checkbox"
                value="Recent Passport-Sized Photograph"
                
                className="checkbox"
              />
              Recent Passport-Sized Photograph
            </label>
          </div>
        </div>

        <div className="form-control">
          <label className="label">Description</label>
          <textarea
            name="description"
            
            className="textarea textarea-bordered w-full"
            placeholder="Enter a description"
            required
          ></textarea>
        </div>

        <div className="form-control">
          <label className="label">Age Restriction</label>
          <input
            type="number"
            name="age_restriction"
            
            className="input input-bordered w-full"
            placeholder="Enter age restriction"
            required
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
          />
        </div>

        <button type="submit" className="btn btn-primary mt-4 w-full">
          Add Visa
        </button>
      </form>
    </div>

    );
};

export default AddVisa;