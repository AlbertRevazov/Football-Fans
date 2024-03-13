import React, { FC, useEffect, useState } from "react";
import styles from "./Slider.module.scss";
import { Image } from "../UI/Image";

export const Slider: FC = () => {
  const [activeId, setActiveId] = useState<number>(0);

  const activeChange: React.MouseEventHandler<HTMLDivElement> = (e) => {
    const active = Number(e.currentTarget.id);
    setActiveId(active);
  };
  // const next = () => {
  //   setActiveId((activeId) => {
  //     if (activeId < data.length - 1) {
  //       return activeId + 1;
  //     }
  //     return 0;
  //   });
  // };
  // const prev = () => {
  //   setActiveId((activeId) => {
  //     if (activeId > 0) {
  //       return activeId - 1;
  //     }
  //     return data.length - 1;
  //   });
  // };
  return (
    <div className={styles.slider_root}>
      {/* <div className={styles.slider_actions_left} onClick={prev}> */}
        <Image alt="left" src="/svg/left_arrow.svg" style={{ width: "50px" }} />
      {/* </div> */}
      {/* <div className={styles.slider_actions_right} onClick={next}> */}
        <Image
          alt="right"
          src="/svg/right_arrow.svg"
          style={{ width: "50px" }}
        />
      {/* // </div> */}
      {/* // {data.map((slide, idx) => {
      //   return (
      //     <div
      //       key={slide.id}
      //       className={idx === activeId ? styles.slide_active : styles.slide}
      //       // data-title={slide.story}
      //       onClick={activeChange}
      //       id={`${idx}`}
      //     >
      //       <Image
      //         src={slide.url}
      //         alt={`Slide ${idx + 1}`}
      //         className={styles.slide_image}
      //       />
      //       <span className={styles.slide_story}>{slide.story}</span>
      //     </div>
      //   );
      // })} */}
    </div>
  );
};
