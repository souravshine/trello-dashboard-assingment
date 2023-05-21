const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="logo">
        <div className="round"> </div>
        <span>Name</span>
      </div>
      <ul>
        <li>
          {" "}
          <span> > </span> Home
        </li>
        <li>
          {" "}
          <span> > </span> Section-1
        </li>
        <li>
          {" "}
          <span> > </span> Section-2
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
