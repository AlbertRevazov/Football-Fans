import { Box, Button, TextField, Typography } from "@mui/material";
import React from "react";
import { useAppSelector } from "../../../../hooks/hooks";
import { useEditUserHooks } from "./hooks";
import { styles } from "./styles";
import Avatar from "@mui/material/Avatar";
import Image from "next/image";

export const Photo: React.FC = () => {
  const { user } = useAppSelector((state) => state.users);
  const { handleInputChange, edit, setEdit, error, deletePhoto, sendPhoto } =
    useEditUserHooks();
  console.log(user?.image);

  return (
    <>
      {!!edit ? (
        <Box className="form-row" sx={styles.flexColumn}>
          <Typography
            sx={[
              styles.font,
              {
                visibility: !!error.length ? "visible" : "hidden",
                color: "red",
                margin: "10px",
              },
            ]}
          >
            {error}
          </Typography>

          <TextField
            type="file"
            variant="standard"
            name="upload_file"
            onChange={handleInputChange}
          />
          <Box sx={styles.buttonWrapper}>
            <Button sx={styles.accept} onClick={sendPhoto} type="submit">
              Изменить
            </Button>
            {!!user?.image && (
              <Button sx={styles.delete} onClick={deletePhoto} type="submit">
                Удалить
              </Button>
            )}

            <Button
              sx={styles.cancel}
              onClick={() => setEdit(!edit)}
              type="submit"
            >
              Отменить
            </Button>
          </Box>
        </Box>
      ) : (
        <Box sx={styles.flexColumn}>
          {user?.image ? (
            <Image
              src='http://localhost:3003/avatar-1675417357258-825319370.jpg'
              alt="avatar"
              width={300}
              height={300}
              // sx={{ width: "300px", height: "300px" }}
            />
          ) : (
            <Avatar sx={{ width: "300px", height: "300px" }} src={user?.name} />
          )}
          <Typography
            sx={[styles.font, { cursor: "pointer", marginTop: "20px" }]}
            onClick={() => setEdit(!edit)}
          >
            Редактировать
          </Typography>
        </Box>
      )}
    </>
  );
};
