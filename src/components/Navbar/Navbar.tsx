import Avatar from "../../assets/Kaustubh.jpg";

import { useMemo, useState } from "react";
import "./styles.css";
import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Menu,
  MenuItem,
  MenuList,
  ThemeProvider,
  createTheme,
  useMediaQuery,
} from "@mui/material";

function Navbar({
  setOpenSidebar,
}: {
  openSidebar: boolean;
  setOpenSidebar: React.Dispatch<React.SetStateAction<boolean>>;
}) {
  const notLarge = useMediaQuery("(max-width:1024px)");

  const theme = useMemo(
    () =>
      createTheme({
        palette: {
          mode: "dark",
        },
      }),
    [false]
  );
  const [openSearchDialog, setOpenSearchDialog] = useState(false);
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
        onClick={({ currentTarget }) => notLarge && setAnchorEl(currentTarget)}
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
          <MenuItem
            onClick={() => {
              setOpenSearchDialog(true);
              setAnchorEl(null);
            }}
          >
            Search
          </MenuItem>
        </MenuList>
      </Menu>
      <ThemeProvider theme={theme}>
        <Dialog
          open={openSearchDialog}
          maxWidth="md"
          fullWidth
          sx={{ backdropFilter: "blur(3px)" }}
          className="lg:hidden block"
        >
          <DialogTitle component={"div"}>
            <div className="lg:text-5xl text-orange-400 text-4xl font-bold">
              Search
            </div>
          </DialogTitle>
          <DialogContent>
            <div className="flex justify-center items-center mx-auto mt-4">
              <section className="w-full __gradient-bg border-0 h-12 flex rounded-md bg-neutral-900">
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
            </div>
          </DialogContent>
          <DialogActions>
            <button
              className="text-orange-400 py-2 px-4"
              onClick={() => setOpenSearchDialog(false)}
            >
              Close
            </button>
          </DialogActions>
        </Dialog>
      </ThemeProvider>
    </nav>
  );
}

export default Navbar;
