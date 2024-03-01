import Link from "next/link";
import React, { FC } from "react";

export const NotFound: FC = () => {
  return (
    <div>
      <div>
        <span>404</span>
        <span>Страница не найдена</span>
        <Link href={"/"} passHref>
          <button color="primary">Вернуться на главную</button>
        </Link>
      </div>
    </div>
  );
};
