import UserCard from "./UserCard";

const Sidebar = () => {
  return (
    <aside className="w-full max-w-[300px] pt-3 border-2 rounded-md p-1">
      {Array(4)
        .fill(null)
        .map((ele, index) => {
          return <UserCard key={index} />;
        })}
    </aside>
  );
};

export default Sidebar;
