import React from "react";
import { useForm } from "react-hook-form";

export default function Register() {
  const {
    register,
    handleSubmit,
    reset,
    watch,
    formState: { errors, isValid },
  } = useForm({ mode: "onChange" , defaultValues : {
    name : '',
    isActive : true,
    email :''
  } });

  const save = (data) => {
    console.log(data);
    reset();
  };
  const password = watch("password");
  return (
    <div className="col-md-4 offset-md-4 p-5 card">
      <h2>Register</h2>

      <form onSubmit={handleSubmit(save)}>
        <label> Name</label>
        <input
          type="text"
          className="form-control"
          {...register("name", {
            required: "Ce champs est obligatoire",
            minLength: { value: 3, message: "Au minimum 3 caractéres" },
          })}
        />
        {errors.name && <p className="text-danger">{errors.name.message}</p>}

        <label> Email</label>
        <input type="text" className="form-control" {...register("email")} />

        <label> PAssword</label>
        <input type="text" className="form-control" {...register("password")} />

        <label> Confirm Password</label>
        <input
          type="text"
          className="form-control"
          {...register("confirm_password", {
            required: "Ce champ est obligatoire",
            validate: (value) =>
              value === password || "Mot de passe non identique",
          })}
        />

        {errors.confirm_password && (
          <p className="text-danger">{errors.confirm_password.message}</p>
        )}

        <button type="submit" className="btn btn-primary" disabled={!isValid}>
          Save
        </button>
      </form>
    </div>
  );
}
