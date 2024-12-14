import { MdOutlinePersonAddAlt } from "react-icons/md";
import image from "../../assets/images/login-hero.png";
import { FcGoogle } from "react-icons/fc";
import { useForm } from "react-hook-form";
import {
  useLoginMutation,
  useLoginWithGoogleMutation,
} from "../../redux/features/auth/authApi";
import { useAppDispatch } from "../../redux/hook";
import { setUser } from "../../redux/features/auth/authSlice";
import { jwtDecode } from "jwt-decode";
import { NavLink, useNavigate } from "react-router-dom";

import { useSignInWithGoogle } from "react-firebase-hooks/auth";

import auth from "../../firebase.init";
import { toast } from "sonner";

const Login = () => {
  const navigate = useNavigate();
  const [signInWithGoogle] = useSignInWithGoogle(auth);
  const [handleLogin] = useLoginMutation();

  const dispatch = useAppDispatch();

  const { register, handleSubmit } = useForm();

  const [handleLoginWithGoogle] = useLoginWithGoogleMutation();

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const onSubmit = async (data: any) => {
    const response = await handleLogin(data);
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

  const handleSignInWithGoogle = async () => {
    const toastId = toast.loading("Signing");

    const res = await signInWithGoogle();

    if (res?.user) {
      const user = res.user;

      const payload = {
        email: user.email as string,
        accountType: "google",
        googleId: user.uid,
        role: "customer",
      };

      const response = await handleLoginWithGoogle(payload);

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
        toast.success("login success", { id: toastId });
      } else {
        toast.error("failed to login", { id: toastId });
      }
    } else {
      toast.error("failed to login", { id: toastId });
    }
  };

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
          <div className="lg:w-1/2 xl:w-5/12 p-6 sm:p-12">
            <div className="block sm:hidden">
              <img
                src="https://storage.googleapis.com/devitary-image-host.appspot.com/15846435184459982716-LogoMakr_7POjrN.png"
                className="w-32 mx-auto"
                alt="Logo"
              />
            </div>
            <div className="flex flex-col items-center">
              <h1 className="text-2xl xl:text-3xl font-extrabold">Sign In</h1>
              <div className="w-full flex-1 mt-8">
                <div className="flex flex-col items-center">
                  <button
                    onClick={() => {
                      handleSignInWithGoogle();
                    }}
                    className="btn btn-outline max-w-xs w-full"
                  >
                    <FcGoogle />
                    Sign in with Google
                  </button>
                </div>

                <div className="my-12 border-b text-center">
                  <div className="leading-none px-2 inline-block text-sm text-gray-600 tracking-wide font-medium bg-white transform translate-y-1/2">
                    Or sign up with e-mail
                  </div>
                </div>

                <div className="mx-auto max-w-xs">
                  <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="mb-4">
                      <label className="input input-bordered flex items-center gap-2">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 16 16"
                          fill="currentColor"
                          className="h-4 w-4 opacity-70"
                        >
                          <path d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" />
                          <path d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" />
                        </svg>
                        <input
                          type="email"
                          className="grow"
                          placeholder="Email"
                          {...register("email", { required: true })}
                        />
                      </label>
                    </div>
                    <div className="mb-4">
                      <label className="input input-bordered flex items-center gap-2">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 16 16"
                          fill="currentColor"
                          className="h-4 w-4 opacity-70"
                        >
                          <path
                            fillRule="evenodd"
                            d="M14 6a4 4 0 0 1-4.899 3.899l-1.955 1.955a.5.5 0 0 1-.353.146H5v1.5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-2.293a.5.5 0 0 1 .146-.353l3.955-3.955A4 4 0 1 1 14 6Zm-4-2a.75.75 0 0 0 0 1.5.5.5 0 0 1 .5.5.75.75 0 0 0 1.5 0 2 2 0 0 0-2-2Z"
                            clipRule="evenodd"
                          />
                        </svg>
                        <input
                          type="password"
                          className="grow"
                          {...register("password", { required: true })}
                        />
                      </label>
                    </div>
                    <div>
                      <button type="submit" className="btn w-full">
                        <MdOutlinePersonAddAlt size={20} />
                        Login
                      </button>
                    </div>
                  </form>

                  {/* <p className="mt-6 text-xs text-gray-600 text-center">
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
                  </p> */}
                </div>
                <p className="text-md text-center my-4 flex items-center justify-center">
                  Don't have an account?
                  <NavLink
                    to={"/signup"}
                    className={
                      "ml-2 text-blue-600 font-semibold flex items-center gap-2"
                    }
                  >
                    Register Now
                  </NavLink>
                </p>
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

export default Login;
