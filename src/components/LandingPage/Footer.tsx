export default function Footer() {
  return (
    <footer className="pt-48">
      <hr className="opacity-10" />

      <div className="grid grid-cols-12 py-16 px-12">
        <h1 className="col-span-4 font-bold text-2xl">Blingpay</h1>

        {/* <div className="flex-grow-0"></div> */}

        {/* Products */}
        <div className="col-span-2">
          <p className="text-lg font-bold mb-6">Product</p>
          <ul className="opacity-50 text-sm space-y-5">
            <li>Blog</li>
            <li>Carears</li>
            <li>Customers</li>
          </ul>
        </div>

        {/* Comapany */}
        <div className="col-span-2">
          <p className="text-lg font-bold mb-6">Company</p>
          <ul className="opacity-50 text-sm space-y-5">
            <li>Learn Solidity</li>
            <li>Pricing</li>
            <li>About RareSkills</li>
          </ul>
        </div>

        {/* Community */}
        <div className="col-span-2">
          <p className="text-lg font-bold mb-6">Community</p>
          <ul className="opacity-50 text-sm space-y-5">
            <li>Curriculum</li>
            <li>Hire Our Developers</li>
            <li>Test Yourself</li>
          </ul>
        </div>

        {/* Developers */}
        <div className="col-span-2">
          <p className="text-lg font-bold mb-6">Community</p>
          <ul className="opacity-50 text-sm space-y-5">
            <li>Admission Process Policy</li>
            <li>Contact Us</li>
          </ul>
        </div>
      </div>

      <hr className="opacity-10" />

      <div className="px-12 pt-10 pb-16 opacity-80">
        <span>&copy; 2023 Blinqpay Inc. All Rights Reserved</span>
      </div>
    </footer>
  );
}
