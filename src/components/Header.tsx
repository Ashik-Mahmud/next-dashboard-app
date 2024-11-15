import Link from "next/link";

const Header = () => {
  return (
    <div className="p-6 bg-slate-50">
      <div className="container mx-auto">
        <ul className="flex items-center gap-4">
          <li>
            <Link className="" href={"/about"}>
              About Us
            </Link>
          </li>
          <li>
            <Link className="" href={"/dashboard"}>
              Dashboard
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
