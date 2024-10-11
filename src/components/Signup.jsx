import { SignUp } from "@clerk/clerk-react";

function Signup() {
  return (
    <div className=" w-full flex justify-center items-center h-[100vh]">
      <SignUp signInUrl="/signin" forceRedirectUrl={"/"}/>
    </div>
);
}

export default Signup;
