import React from "react";
import Menu from "@mui/material/Menu";
import { Box } from "@mui/material";
import MenuItem from "@mui/material/MenuItem";
import PopupState, { bindTrigger, bindMenu } from "material-ui-popup-state";
import { styles } from "./styles";
import { useAppDispatch, useAppSelector } from "../../hooks/hooks";
import { checkIsAuth, logout } from "../../redux/features/auth/authSlice";
import { toast } from "react-toastify";
import Divider from "@mui/material/Divider";

export const MobileNav: React.FC = () => {
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
            <MenuItem
              sx={{ width: "400px", margin: "20px" }}
              onClick={popupState.close}
            >
              <Box
                sx={[styles.icon, { backgroundImage: "url(/images/user.png)" }]}
              />
              Личный Кабинет
            </MenuItem>
            <MenuItem
              sx={{ width: "400px", margin: "20px" }}
              onClick={popupState.close}
            >
              <Box
                sx={[
                  styles.icon,
                  { backgroundImage: "url(/images/option.png)" },
                ]}
              />
              Настройки
            </MenuItem>
            {isAuth ? (
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
            ) : (
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
            )}
            <Divider />
            <MenuItem
              sx={{ width: "400px", margin: "20px" }}
              onClick={popupState.close}
            >
              Главная
            </MenuItem>
            <MenuItem
              sx={{ width: "400px", margin: "20px" }}
              onClick={popupState.close}
            >
              Карта
            </MenuItem>
            <MenuItem
              sx={{ width: "400px", margin: "20px" }}
              onClick={popupState.close}
            >
              Матчи
            </MenuItem>
          </Menu>
        </>
      )}
    </PopupState>
  );
};
