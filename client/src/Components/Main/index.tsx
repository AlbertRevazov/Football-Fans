import React, { FC } from "react";
import { Image } from "@/Common/UI/Image";
import styles from "./Main.module.scss";
import { Slider } from "@/Common/Slider";

export const Main: FC = () => {
  return (
    <div className={styles.main_root}>
      <div className={styles.main_container}>
        <section className={styles.main_about}>
          <div className={styles.main_title_wrap}>
            <p className={styles.main_title}>football fans</p>
            <p className={styles.main_subtitle}>
              это площадка, которая объединяет настоящих любителей футбола. Наш
              сайт предназначен для всех, кому интересна эта увлекательная игра,
              ведь футбол – это не просто спорт, это целый мир, полный эмоций,
              страсти и соперничества.
            </p>
          </div>
          <div className={styles.main_image}>
            {/* <Image
              src="/img/welc-back.jpg"
              alt="background pitch"

              style={{ objectFit: "cover", borderRadius: "10px" }}
            /> */}
          </div>
          <div className={styles.main_description}>
            <h2>Мы здесь, чтобы помочь болельщикам по всему миру.</h2>
            <h4>
              На нашем сайте вы найдете все, что нужно, чтобы быть в курсе
              последних новостей, результатов и статистики футбольных матчей.
              <br />
              <br />
              Мы тщательно следим за развитием событий футбольного мира и
              предлагаем вам самую актуальную информацию, доступную на одной
              платформе. Наша команда живет и дышит футболом, и мы делимся этой
              страстью с вами.
            </h4>
          </div>
        </section>
      </div>
    </div>
  );
};
