import { useState } from "react";
import { DataType } from "../data/data";
import { AiOutlineRight, AiOutlineDown } from "react-icons/ai";
import { FcFolder } from "react-icons/fc";

const Folder: React.FC<DataType> = ({ title, items, isFolder }) => {
  const [expand, setExpand] = useState(false);
  function showIcon() {
    if (isFolder) {
      return (
        <div className="flex">
          {expand ? <AiOutlineDown /> : <AiOutlineRight />}
          <FcFolder />
        </div>
      );
    }
  }
  return (
    <>
      <div className="cursor-pointer">
        <div onClick={() => setExpand(!expand)} className="flex items-center">
          {/* {isFolder && !expand ? <AiOutlineRight /> : <AiOutlineDown />} */}
          {showIcon()}
          <div className="ml-1">{title}</div>
        </div>
        <div style={{ display: expand ? "block" : "none", paddingLeft: 15 }}>
          {items?.map((explore) => (
            <Folder
              key={explore.title}
              title={explore.title}
              items={explore.items}
              isFolder={explore.isFolder}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default Folder;
