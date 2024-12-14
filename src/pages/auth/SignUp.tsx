import { MdOutlinePersonAddAlt } from "react-icons/md";
import image from "../../assets/images/login-hero.png";
import { useForm } from "react-hook-form";
import { useRegisterMutation } from "../../redux/features/auth/authApi";
import { useAppDispatch } from "../../redux/hook";
import { setUser } from "../../redux/features/auth/authSlice";
import { jwtDecode } from "jwt-decode";
import { NavLink, useNavigate } from "react-router-dom";

type FormData = {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  confirmPassword: string;
};

const SignUp = () => {
  const navigate = useNavigate();
  const [handleRegister] = useRegisterMutation();

  const dispatch = useAppDispatch();

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<FormData>();
  const onSubmit = async (data: FormData) => {
    const payload = {
      firstName: data.firstName,
      lastName: data.lastName,
      email: data.email,
      password: data.password,
      role: "customer",
      accountType: "email",
      googleId: null,
      mobile: null,
    };

    console.log(payload);

    const response = await handleRegister(payload);
    if (response?.data?.success) {
      const { accessToken } = response.data.data;
      const decoded = jwtDecode(accessToken);

      dispatch(
        setUser({
          user: decoded,
          token: accessToken,
        })
      );
      navigate("/shop");
    }
  };

  const password = watch("password");
  return (
    <div className="relative">
      <div className="min-h-screen bg-gray-100 text-gray-900 flex justify-center">
        <div className="max-w-screen bg-white shadow sm:rounded-lg flex justify-center flex-1">
          <div className="flex-1 bg-indigo-100 text-center hidden lg:flex">
            <img
              className="h-full max-h-[90vh] mx-auto my-auto"
              src={image}
              alt=""
            />
          </div>
          <div className="flex-1 p-6 sm:p-12">
            <div className="block sm:hidden">
              <img
                src="https://storage.googleapis.com/devitary-image-host.appspot.com/15846435184459982716-LogoMakr_7POjrN.png"
                className="w-32 mx-auto"
                alt="Logo"
              />
            </div>
            <div className="flex flex-col items-center">
              <h1 className="text-xl xl:text-2xl font-extrabold">
                Create new Account
              </h1>
              <div className="w-full flex-1 mt-8">
                <div className="mx-auto">
                  <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <label className="form-control w-full">
                        <div className="label">
                          <span className="label-text">First Name</span>
                        </div>
                        <input
                          {...register("firstName", {
                            required: true,
                          })}
                          type="text"
                          placeholder="Type here"
                          className="input input-bordered w-full max-w-xs"
                        />
                      </label>
                      <label className="form-control w-full">
                        <div className="label">
                          <span className="label-text">Last Name</span>
                        </div>
                        <input
                          type="text"
                          placeholder="Type here"
                          className="input input-bordered w-full max-w-xs"
                          {...register("lastName", {
                            required: true,
                          })}
                        />
                      </label>
                      <label className="form-control w-full col-span-1 sm:col-span-2 bg-white">
                        <div className="label">
                          <span className="label-text">Email Address</span>
                        </div>
                        <input
                          type="text"
                          placeholder="Type here"
                          className="input input-bordered w-full"
                          {...register("email", {
                            required: true,
                            pattern: {
                              value: /\S+@\S+\.\S+/,
                              message:
                                "Entered value does not match email format",
                            },
                          })}
                        />
                      </label>
                      <label className="form-control w-full max-w-xs">
                        <div className="label">
                          <span className="label-text">Password</span>
                        </div>
                        <input
                          type="text"
                          placeholder="Type here"
                          className="input input-bordered w-full max-w-xs"
                          {...register("password", {
                            required: true,
                          })}
                        />
                      </label>
                      <label className="form-control w-full max-w-xs">
                        <div className="label">
                          <span className="label-text">Confirm Password</span>
                        </div>
                        <input
                          type="text"
                          placeholder="Type here"
                          className="input input-bordered w-full max-w-xs"
                          {...register("confirmPassword", {
                            required: true,
                            validate: (value) =>
                              value === password || "Passwords do not match",
                          })}
                        />
                        {errors.confirmPassword && (
                          <p>{errors.confirmPassword.message}</p>
                        )}
                      </label>
                    </div>

                    <div className="mt-6">
                      <button type="submit" className="btn w-full">
                        <MdOutlinePersonAddAlt size={20} />
                        Login
                      </button>
                    </div>
                  </form>
                  <p className="text-md text-center my-4 flex items-center justify-center">
                    Already have account?
                    <NavLink
                      to={"/login"}
                      className={
                        "ml-2 text-blue-600 font-semibold flex items-center gap-2"
                      }
                    >
                      Login
                    </NavLink>
                  </p>
                  <p className="mt-6 text-xs text-gray-600 text-center">
                    I agree to abide by templatana's{" "}
                    <a
                      href="#"
                      className="border-b border-gray-500 border-dotted"
                    >
                      Terms of Service
                    </a>{" "}
                    and its{" "}
                    <a
                      href="#"
                      className="border-b border-gray-500 border-dotted"
                    >
                      Privacy Policy
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute top-[48px] left-[48px] hidden lg:block">
        <p className="text-xl font-bold">Taasu Soap</p>
      </div>
    </div>
  );
};

export default SignUp;
