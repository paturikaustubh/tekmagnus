import Avatar from "../../assets/Kaustubh.jpg";

import { useState } from "react";
import "./styles.css";
import { Menu, MenuItem, MenuList } from "@mui/material";

function Navbar({
  setOpenSidebar,
}: {
  openSidebar: boolean;
  setOpenSidebar: React.Dispatch<React.SetStateAction<boolean>>;
}) {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const openMenu = Boolean(anchorEl);
  return (
    <nav
      className="flex w-full lg:justify-end justify-start sticky top-0 items-center gap-8 p-4"
      style={{
        backdropFilter: "blur(3px)",
        backgroundColor: "rgba(0 0 0 0.8)",
      }}
    >
      <div className="flex gap-2 items-center mr-auto">
        <button
          className="material-symbols-outlined text-amber-50 lg:hidden block"
          onClick={() => setOpenSidebar((prevVal) => !prevVal)}
        >
          menu
        </button>
        <span className="text-2xl text-amber-50 font-bold">
          Kaustubh Paturi
        </span>
      </div>
      <section className="w-72 __gradient-bg lg:flex hidden rounded-md bg-neutral-900">
        <input
          type="text"
          className="flex-1 bg-transparent"
          placeholder="Search"
        />
        <button
          className="material-symbols-outlined text-neutral-300"
          style={{ fontSize: "1.3em" }}
        >
          search
        </button>
      </section>
      <button className="w-8 __gradient-bg __notification-dot lg:flex hidden bg-neutral-900">
        <span
          className="material-symbols-outlined text-neutral-300"
          style={{ fontSize: "1.3em" }}
        >
          notifications
        </span>
      </button>
      <button className="w-8 __gradient-bg __notification-dot lg:flex hidden bg-neutral-900">
        <span
          className="material-symbols-outlined text-neutral-300"
          style={{ fontSize: "1.3em" }}
        >
          mail
        </span>
      </button>
      <button
        className="size-8 lg:ml-0 ml-auto rounded-full"
        style={{ fontSize: "2em" }}
        onClick={({ currentTarget }) => setAnchorEl(currentTarget)}
      >
        <img src={Avatar} alt="Avatar" className="rounded-full" />
      </button>
      <Menu
        open={openMenu}
        anchorEl={anchorEl}
        onClose={() => setAnchorEl(null)}
        className="lg:hidden block"
      >
        <MenuList>
          <MenuItem className="__notification-dot">Notification</MenuItem>
          <MenuItem className="__notification-dot">Messages</MenuItem>
          <MenuItem>Search</MenuItem>
        </MenuList>
      </Menu>
    </nav>
  );
}

export default Navbar;
