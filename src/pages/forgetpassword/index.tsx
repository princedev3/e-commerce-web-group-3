import image1 from "../../assets/images/phoe image.jpg";
import { useForm } from "react-hook-form";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Link } from "react-router-dom";
import { useState } from "react";

type FormData = {
  email: string;
  password: string;
};

const LogIn = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isValid },
  } = useForm<FormData>({
    mode: "onChange",
  });

  const [isLoading, setIsLoading] = useState(false);

  const onSubmit = async (data: FormData) => {
    console.log("Form Data Submitted:", data);
    setIsLoading(true);

    setTimeout(() => {
      toast.success("Your information has been sent successfully!");
      reset({ email: "", password: "" });
      setIsLoading(false);
    }, 1000);
  };

  return (
    <div className="lg:flex items-center justify-center lg:min-h-screen">
      <img
        className="lg:h-screen lg:min-w-1 object-cover w-full"
        src={image1}
        alt="Descriptive Alt Text"
      />

      <div className="lg:w-1/3 p-6 rounded-md mx-6 sm:w-full mt-7">
        <h2 className="text-xl text-center font-semibold mb-4">Forget password?</h2>
       

        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="mb-4">
            <input
              type="email"
              id="email"
              className="w-full border-b border-gray-300 p-2 focus:outline-none bg-transparent"
              placeholder="Enter your email"
              {...register("email", {
                required: "Email is required",
                pattern: {
                  value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                  message: "Invalid email format",
                },
              })}
            />
            {errors.email && (
              <p className="text-sm text-red-500">{errors.email.message}</p>
            )}
          </div>

          

          <div className="flex lg:space-x-28 justify-between">
            {isLoading ? (
              <div className="text-center">Loading...</div> // Placeholder text for loading state
            ) : (
              <button
                type="submit"
                className="w-28 bg-red-500 text-white rounded-md p-2 mb-4"
                disabled={!isValid} // Button disabled if form is not valid
              >
                Submit
              </button>
            )}
            <div>
            <Link to="/auth/login" >
            <p className="text-red-500 mr-6 mt-2 hover:underline">
            Login  </p>
          </Link>
            </div>
          </div>
          
          
        </form>
      </div>
      <ToastContainer />
    </div>
  );
};

export default LogIn;