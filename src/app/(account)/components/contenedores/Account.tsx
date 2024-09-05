export default function AccountContainer() {
  return (
    <>
        <div className="grid gap-4">
            <h3 className="text-[1.25rem] font-medium">CONTACT INFORMATION</h3>
            <ul className="grid gap-4">
                <li>
                    <h4 className=" text-[.75rem] text-[#514e4c] ">Full name</h4>
                    <p className="text-[1rem] font-medium">Steven Sanchez</p>
                </li>
                <li>
                    <h4 className=" text-[.75rem] text-[#514e4c] ">Email</h4>
                    <p className="text-[1rem] font-medium">steven@gmail.com</p>
                </li>
            </ul>
        </div>
    </>
  );
}