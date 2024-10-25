import React from 'react'
import { useForm } from "react-hook-form";


export default function Form() {
  const { register, handleSubmit, watch, formState: { errors } } = useForm();
  const onSubmit = data => console.log(data);

  console.log(watch("example")); 
  return (
    <>
      <form className='flex flex-col gap-5 items-center justify-center h-[600px] ' onSubmit={handleSubmit(onSubmit)}>
        <div>
          <label>
            First Name 
          </label>
          <input className='border-2 rounded-md mx-2 pl-2'
           {...register("firstName")}
           />
        </div>
        <div>
          <label>
            Middle Name 
          </label>
          <input className='border-2 rounded-md mx-2 pl-2' 
           {...register("middleName")}
          />
        </div>
        <div>
          <label>
            Last Name
          </label>
          <input className='border-2 rounded-md mx-2 pl-2' 
          {...register("lastName")}
          />
        </div>
      </form>
    </>
  );
}


/*    <input defaultValue="test" {...register("example")} />
      <input {...register("exampleRequired", { required: true })} />
      {errors.exampleRequired && <span>This field is required</span>}
      <input type="submit" /> */