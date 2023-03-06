import { Avatar, Box, Typography } from "@mui/material";
import { Logo } from "../Logo";
import { useAppDispatch, useAppSelector } from "../../hooks/hooks";
import {
  checkIsAuth,
  getMe,
  logout,
} from "../../redux/features/auth/authSlice";
import { toast } from "react-toastify";
import { styles } from "./styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import { MobileNav } from "./MobileNav";
import { link } from "../../types";
import Link from "next/link";
import { useEffect, FC } from "react";

export const Nav: FC = () => {
  const isMobile = useMediaQuery("(max-width:900px)");
  const isAuth = useAppSelector(checkIsAuth);
  const dispatch = useAppDispatch();
  const { user } = useAppSelector((state) => state.users);

  const links = [
    { id: 1, title: "Главная", to: "/", hide: !isAuth },
    { id: 2, title: "Войти", to: "/sign", hide: isAuth },
    { id: 3, title: "Выйти", to: "/", hide: !isAuth, onclick: true },
    { id: 4, title: "Карта", to: "/map", hide: !isAuth },
    { id: 5, title: "Матчи", to: "/matches", hide: !isAuth },
    { id: 6, title: "Избранное", to: "/favourites", hide: !isAuth },
  ];

  const logoutHandle = () => {
    dispatch(logout());
    window.localStorage.removeItem("token");
    toast("Вы вышли из системы.");
  };

  useEffect(() => {
    dispatch(getMe());
  }, []);
  return (
    <>
      {!isMobile ? (
        <Box sx={styles.root}>
          <Box sx={styles.navBar}>
            <Logo />
            {links.map((item: link) => (
              <Box
                key={item.id}
                onClick={item.onclick ? logoutHandle : () => {}}
                hidden={item.hide}
                sx={styles.link}
              >
                <Link style={{ textDecoration: "none" }} href={item.to}>
                  <Typography sx={styles.font}>{item.title}</Typography>
                </Link>
              </Box>
            ))}
          </Box>
          {isAuth && (
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-around",
                alignItems: "center",
              }}
            >
              <Link
                href={"/user"}
                style={{ textDecoration: "none", color: "#202020" }}
              >
                <Typography
                  sx={[
                    styles.font,
                    {
                      ":hover": {
                        borderBottom: "3px solid darkseagreen",
                      },
                    },
                  ]}
                >
                  Личный Кабинет
                </Typography>
              </Link>
              <Avatar
                sx={{ marginLeft: "12px" }}
                alt={user?.name}
                src={user?.image}
              />
            </Box>
          )}
        </Box>
      ) : (
        <>
          <Box sx={styles.root}>
            <Box sx={styles.navBar}>
              <Logo />
              <MobileNav />
            </Box>
          </Box>
        </>
      )}
    </>
  );
};
