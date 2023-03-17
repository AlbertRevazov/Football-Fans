import React, { FC, ReactNode } from "react";
import CustomLink from "next/link";

interface CustomLinkProps {
  slug: string | number;
  children: ReactNode;
}

export const Link: FC<CustomLinkProps> = ({ slug, children }) => {
  return (
    <CustomLink
      style={{ textDecoration: "none", color: "#202020" }}
      href={{
        pathname: "/teams/[slug]",
        query: { slug },
      }}
    >
      {children}
    </CustomLink>
  );
};
