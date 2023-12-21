export default function Header() {
  return (
    <nav className="flex items-center justify-between h-20 w-full">
      {/* Logo and search input */}
      <div className="flex items-center w-1/2">
        {/* Search */}
        <div className="w-full">
          <input
            type="text"
            placeholder="Search Orders"
            className="bg-input rounded-3xl border border-white border-opacity-25 outline-none py-3 px-5 w-2/3"
          />
        </div>
      </div>

      {/* Timer and profile */}
      <div className="flex justify-between w-1/2 ">
        <div>
          <div className="bg-button-primary bg-opacity-20 rounded-3xl py-3 px-12">
            30 : 20 : 2
          </div>
        </div>

        {/* Profile */}

        <div className="flex items-center gap-x-2">
          <div className="h-[43px] w-[43px] bg-white rounded-full"></div>
          <div>
            <h3 className="text-xl">Somto Udekwu</h3>
            <p className="opacity-40">Merchant</p>
          </div>
        </div>
      </div>
    </nav>
  );
}
