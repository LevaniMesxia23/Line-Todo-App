import { useGoogleLogin } from '@react-oauth/google';
import { jwtDecode } from 'jwt-decode';
import { Link, useNavigate } from 'react-router-dom';

function Signin() {
  const navigate = useNavigate();
  const googleLogin = useGoogleLogin({
    onSuccess: credentialResponse => {
      const decoded = jwtDecode(credentialResponse?.credential);
      console.log(decoded);
      navigate("/myday")
    },
    onError: () => {
      console.log('Login Failed');
    },
  });

  

  return (
    <div className="flex flex-col items-center px-4 sm:px-6 lg:px-8">
      <div className="flex flex-col items-center justify-center h-[100vh] w-full max-w-md">
        <div className="mb-8 sm:mb-12 flex items-center flex-col gap-4 sm:gap-7">
          <div className="w-[3rem] h-[3rem] sm:w-[4.9375rem] sm:h-[4.9375rem] bg-[#0500FF73] rounded-full"></div>
          <p className="text-[1.5rem] sm:text-[2rem] text-[#0059AC]">Sign in</p>
        </div>

        <form className="flex flex-col gap-4 w-full">
          <input
            type="email"
            placeholder="Enter your username or Email"
            className="py-[1rem] sm:py-[1.25rem] rounded-xl pl-4 border-[1px] border-[#E6E8EB] text-[#5F6571]"
          />
          <input
            type="password"
            placeholder="Enter your Password"
            className="py-[1rem] sm:py-[1.25rem] rounded-xl pl-4 border-[1px] border-[#E6E8EB] text-[#5F6571]"
          />
        </form>

        <div className="flex justify-start w-full mt-[0.88rem]">
          <p className="text-sm sm:text-base">Forgot password?</p>
        </div>

        <button className="bg-[#477EE7] p-[0.9rem] sm:p-[1.15rem] w-full rounded-[1.875rem] text-white mt-6 mb-6 sm:mb-8">
          Sign in
        </button>

        <div className="flex items-center gap-[0.5rem] sm:gap-[0.88rem] w-full">
          <div className="h-[0.0625rem] bg-[#CFD3DA] w-full"></div>
          <p className="text-sm sm:text-base whitespace-nowrap">or</p>
          <div className="h-[0.0625rem] bg-[#CFD3DA] w-full"></div>
        </div>


        <div className="my-4 w-full flex justify-center">
          <button
            className="border-[#CFD3D9] border-[1px] text-[#252931] w-full py-[0.9rem] sm:py-[1.15rem] rounded-[1.875rem] flex items-center justify-center gap-2"
            onClick={googleLogin}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="18"
              height="18"
              viewBox="0 0 48 48"
              className="mr-2"
            >
              <path
                fill="#4285F4"
                d="M24 9.5c3.14 0 5.87 1.15 8.03 3.04l5.88-5.88C33.81 3.24 29.22 1 24 1 14.7 1 6.89 6.55 3.15 14.74l6.91 5.37C12.14 15.24 17.58 9.5 24 9.5z"
              />
              <path
                fill="#34A853"
                d="M46.1 24.65c0-1.35-.12-2.7-.34-4.02H24v7.65h12.54c-.55 2.77-2.1 5.12-4.44 6.66l6.91 5.37c4.03-3.73 6.19-9.2 6.19-15.66z"
              />
              <path
                fill="#FBBC05"
                d="M10.06 28.11a14.92 14.92 0 01-.82-4.61c0-1.6.3-3.14.82-4.61l-6.91-5.37C1.15 16.65 0 20.21 0 24s1.15 7.35 3.15 10.47l6.91-5.37z"
              />
              <path
                fill="#EA4335"
                d="M24 47c5.22 0 9.81-1.72 13.44-4.66l-6.91-5.37C28.62 38.65 26.4 39.5 24 39.5c-6.42 0-11.86-5.74-13.94-12.61l-6.91 5.37C6.89 41.45 14.7 47 24 47z"
              />
            </svg>
            Sign in with Google
          </button>
        </div>

        <div className="flex gap-[0.25rem] items-center">
          <span className="font-normal text-sm sm:text-base">Dont have an account?</span>
          <Link to={"/signup"}> <span className="font-medium hover:underline text-sm sm:text-base">Sign up</span></Link>
        </div>
      </div>
    </div>
  );
}

export default Signin;
