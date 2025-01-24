import React from "react";

interface Props {
  children: React.ReactNode; // <div><div/>
}

export default function Container({ children }: Props) {
  return <div style={{ border: "1px solid green" }}>{children}</div>;
}
