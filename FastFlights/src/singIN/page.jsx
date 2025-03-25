import react from 'react';

function SignIN() {
  return (
    <div className="">
      <div className="flex-col">
        <p class="text-[35px] flex justify-center underline ">Sign In</p>
        <div className="flex justify-center p-10">
          <p className="text-black-300">Username:</p>
          <input className="border-solid border-2 border-black hover:bg-gray-200"></input>
        </div>
        <div className="flex justify-center">
          <p className="text-black-300">Password :</p>
          <input className="border-solid border-2 border-black hover:bg-gray-200"></input>
        </div>

        <div className="flex justify-center mr-2 py-10">
          <button className="flex justify-center w-28  h-7 bg-white-500 border-solid border-2 border-black hover:bg-gray-200 ">
            ENTER
          </button>
        </div>
      </div>
    </div>
  );
}

export default SignIN;
