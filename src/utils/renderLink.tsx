// utils/renderLink.tsx
import Link from "next/link";
import React from "react";

export const renderLink = (
  href: string,
  label: string | React.ReactNode
): React.ReactElement => {
  return (
    <Link href={href} passHref>
      <span>{label}</span>
    </Link>
  );
};
