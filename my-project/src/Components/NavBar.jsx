const NavBar = () => {
  const link = [
    { name: "Home", href:"#"},
    { name: "Freedom", href:"#"},
    { name: "technology", href:"#"},
    { name: "Future", href:"#"},
    { name: "Contact", href:"#"}
  ]

  return (
    <>
      <div className="flex mt-5 justify-around items-center static">
        <h1 className="font-bold text-5xl capitalize ">India</h1>
        <div>
          <ul className="flex gap-12">
            {link.map((link) => (
              <li className="hover:scale-140 text-md">
                <a href={link.href}>{link.name}</a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
};

export default NavBar;
