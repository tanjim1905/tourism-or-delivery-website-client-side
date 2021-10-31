import React from 'react';
import { useForm } from "react-hook-form";
import './AddService.css';


const AddService = () => {
    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
      } = useForm();
      const onSubmit = (data) => {
          console.log(data);
        fetch('https://boiling-shelf-94607.herokuapp.com/addServices', {
            method: 'POST',
            headers: {"content-type": "application/json"},
            body: JSON.stringify(data)
        })
      }
    return (
        <div className="add-service">
        <div className="container d-flex justify-content-center">
        <div className="my-5">
        <h2 className="my-3 text-danger">Add a new Service</h2>
        <form onSubmit={handleSubmit(onSubmit)}>
          <input placeholder="Write a title" {...register("title")} /> <br /> <br />
          <input placeholder="Put an image URL" {...register("imgUrl", { required: true })} /> <br /><br />
          <input placeholder="Write short description" {...register("description", { required: true })} /> <br /> <br />
          <textarea className="text-area" placeholder="Write something details" {...register("details", { required: true })}></textarea> <br /> <br />
          
          <input className="btn-danger fw-bold" type="submit" value="Add Product" />
        </form>
        </div>
        
        </div>
        </div>
    );
};

export default AddService;