function Navbar() {
  return (
    <div className="fixed w-full grid">
      <div className=" ">
        <ul className="text-3xl flex  gap-7 content-end justify-end p-8 font-['NATS']">
          <li className="cursor-pointer border-transparent border-b-2 hover:border-white ">
            HOME
          </li>
          <li className="cursor-pointer border-transparent border-b-2 hover:border-white  ">
            ABOUT
          </li>
          <li className="cursor-pointer border-transparent border-b-2 hover:border-white ">
            WORK
          </li>
          <li className="cursor-pointer border-transparent border-b-2 hover:border-white ">
            CONTACT
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Navbar;
