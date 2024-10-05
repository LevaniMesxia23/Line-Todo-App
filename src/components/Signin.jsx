
function Signin() {
  return (
    <div className="flex flex-col items-center ">
    
    <div className="flex flex-col items-center justify-center w-[20rem] h-[100vh]">
      <div className="mb-12 flex items-center flex-col gap-7">
      <div className="w-[4.9375rem] h-[4.9375rem] bg-[#0500FF73] rounded-full"></div>
      <p className="text-[2rem] text-[#0059AC]">Sign in</p>
      </div>

      <form action="" className="flex flex-col gap-4 w-full">
        <input type="email" placeholder="Enter your username or Email" className="py-[1.25rem] rounded-xl pl-4 border-[1px] border-[#E6E8EB] text-[#5F6571]"/>
        <input type="password" placeholder="Enter your Password" className="py-[1.25rem] rounded-xl pl-4 border-[1px] border-[#E6E8EB] text-[#5F6571]"/>
      </form>
      <div className="flex justify-start w-full mt-[0.88rem]">
      <p>Forgot password?</p>
      </div>
      <button className="bg-[#477EE7] p-[1.15rem] w-full rounded-[1.875rem] text-white mt-6 mb-8">Sign in</button>

      <div className=" flex items-center gap-[0.88rem]">
        <div className="w-[9.375rem] h-[0.0625rem] bg-[#CFD3DA]"></div>
        <p>or</p>
        <div className="w-[9.375rem] h-[0.0625rem] bg-[#CFD3DA]"></div>
      </div>
    </div>
    </div>
  )
}

export default Signin