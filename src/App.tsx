import Folder from "./components/Folder";
import { data } from "./data/data";

export default function App() {
  return (
    <>
      <div className="p-5">
        {data.map((item) => (
          <Folder
            key={item.title}
            title={item.title}
            isFolder={item.isFolder}
            items={item.items}
          />
        ))}
      </div>
    </>
  );
}
