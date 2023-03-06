import React, { FC } from "react";
import Menu from "@mui/material/Menu";
import { Box } from "@mui/material";
import MenuItem from "@mui/material/MenuItem";
import PopupState, { bindTrigger, bindMenu } from "material-ui-popup-state";
import { styles } from "./styles";
import { useAppDispatch, useAppSelector } from "../../hooks/hooks";
import { checkIsAuth, logout } from "../../redux/features/auth/authSlice";
import { toast } from "react-toastify";
import Divider from "@mui/material/Divider";
import Link from "next/link";

export const MobileNav: FC = () => {
  const dispatch = useAppDispatch();
  const isAuth = useAppSelector(checkIsAuth);

  const logoutHandle = () => {
    dispatch(logout());
    window.localStorage.removeItem("token");
    toast("Вы вышли из системы.");
  };

  return (
    <PopupState variant="dialog" popupId="demo-popup-menu">
      {(popupState) => (
        <>
          <Box sx={styles.menu} {...bindTrigger(popupState)} />
          <Menu {...bindMenu(popupState)}>
            {isAuth ? (
              <Link
                href={"/sign"}
                style={{ textDecoration: "none", color: "#202020" }}
              >
                <MenuItem
                  sx={{ width: "400px", margin: "20px" }}
                  onClick={popupState.close}
                >
                  <Box
                    sx={[
                      styles.icon,
                      { backgroundImage: "url(/images/logout.png)" },
                    ]}
                  />
                  <Box onClick={logoutHandle} color="#202020" sx={styles.font}>
                    Выйти
                  </Box>
                </MenuItem>
              </Link>
            ) : (
              <Link
                href={"/sign"}
                style={{ textDecoration: "none", color: "#202020" }}
              >
                <MenuItem
                  sx={{ width: "400px", margin: "20px" }}
                  onClick={popupState.close}
                >
                  <Box
                    sx={[
                      styles.icon,
                      { backgroundImage: "url(/images/login.png)" },
                    ]}
                  />
                  Войти
                </MenuItem>
              </Link>
            )}
            <Divider />
            <Link
              href={"/"}
              style={{ textDecoration: "none", color: "#202020" }}
            >
              <MenuItem
                sx={{ width: "400px", margin: "20px" }}
                onClick={popupState.close}
              >
                Главная
              </MenuItem>
            </Link>
            <Link
              href={"/map"}
              style={{ textDecoration: "none", color: "#202020" }}
            >
              <MenuItem
                sx={{ width: "400px", margin: "20px" }}
                onClick={popupState.close}
              >
                Карта
              </MenuItem>
            </Link>
            <Link
              href={"/matches"}
              style={{ textDecoration: "none", color: "#202020" }}
            >
              <MenuItem
                sx={{ width: "400px", margin: "20px" }}
                onClick={popupState.close}
              >
                Матчи
              </MenuItem>
            </Link>
            <Link
              href={"/favourites"}
              style={{ textDecoration: "none", color: "#202020" }}
            >
              <MenuItem
                sx={{ width: "400px", margin: "20px" }}
                onClick={popupState.close}
              >
                Избранное
              </MenuItem>
            </Link>
          </Menu>
        </>
      )}
    </PopupState>
  );
};
