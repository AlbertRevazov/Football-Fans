import Link from "next/link";
import Image from "next/image";
import React, { FC } from "react";

export const Logo: FC = () => {
  return (
    <Link href={"/"}>
      <Image
        style={{ borderRadius: "12px" }}
        src="/images/stadium.gif"
        alt="avatar"
        width={60}
        height={60}
      />
    </Link>
  );
};
