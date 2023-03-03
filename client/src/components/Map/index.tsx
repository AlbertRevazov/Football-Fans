import { FC } from "react";
import { YMaps, Map } from "@pbe/react-yandex-maps";
import { Box } from "@mui/material";
import { styles } from "./styles";

export const MapPage: FC = () => {
  return (
    <Box style={styles.root}>
      <YMaps>
        <Map
          style={{
            width: "90%",
            height: "600px",
            overflow: "hidden",
            borderRadius: "24px",
          }}
          defaultState={{
            // the initial focus of the map
            center: [55.751574, 37.573856],
            zoom: 8,
            controls: ["zoomControl", "fullscreenControl"],
          }}
          modules={["control.ZoomControl", "control.FullscreenControl"]}
        />
      </YMaps>
    </Box>
  );
};
