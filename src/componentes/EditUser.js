import { useEffect } from "react";
import { useForm } from "react-hook-form";

const EditUser = ({ dafaulValues, onEdit}) => {
    
    const {register, handleSubmit, reset} = useForm();

    const objDataBase = {
        name: "", 
        lastName: "",
        Email: "",
        birthday: "",
        isAvailable: false,
    };
      
    const objFormEditWithPut = {
        id: "student",
        isAvailable: true,
        name: "type",
        
    };

    const objFormEditWithPatch = {
        isAvailable: false,
    };

    const onSubmit = (res) => {
        console.log("funciona", res);
        onEdit(res)
        reset()
    };

    return (
        <form onSubmit={ handleSubmit(onSubmit) } >
          <label htmlFor="name">Name</label>
          <input
            id="name"
            required={true}
            {...register("name")}
          />
          <br />
          <label htmlFor="lastNane">lastname</label>
          <input
            id="lastName"
            required={true}
            {...register("lastName")}
          />
          <br />
          <label htmlFor="email">email</label>
          <input
            id="email"
            required={true}
            {...register("email")}
          />
          <br />
          <label htmlFor="is_available">Is Available</label>
          <input
            id="is_available"
            type="checkbox"
            {...register("isAvailable")}
          />
          <br />
          <input type="submit" value="Editar" />
        </form>
    );

}

export default EditUser;