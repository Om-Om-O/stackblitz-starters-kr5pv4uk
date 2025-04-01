import react from 'react';

function login() {
  return (
    <div className="">
      <div className="flex-col">
        <p class="text-[35px] flex justify-center ">Sign In</p>
        <div className="flex justify-center p-10">
          <p className="text-black-300">Username:</p>
          <input className="border-solid border-2 border-black rounded-full"></input>
        </div>
        <div className="flex justify-center ">
          <p className="text-black-300">Password:</p>
          <input className="border-solid border-2 border-black rounded-full"></input>
        </div>
        <div className="flex justify-center p-28">
          <button className="bg-gray-300 p-2 rounded-full">button</button>
        </div>
      </div>
    </div>
  );
}

export default login;
