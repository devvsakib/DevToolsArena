import { MdConstruction, MdInsertDriveFile } from "react-icons/md";

function Header({ notice }) {
  return (
    <header className="p-4 bg-dark-secondary">
      <div className="w-full md:w-5/6 mx-auto flex flex-col md:flex-row justify-between items-center">
        <h1 className="text-xl font-bold">
          GITHUB <span className="text-primary line-through">ERROR</span> SOLVE
        </h1>
        <div className="flex mt-2 md:mt-0 items-center gap-3 text-sm">
          <MdConstruction className="text-lg" />
          <h6>Under construction</h6>
          <MdInsertDriveFile className="text-lg" />
          <h6>doc</h6>
        </div>
      </div>
    </header>
  );
}

export default Header;
