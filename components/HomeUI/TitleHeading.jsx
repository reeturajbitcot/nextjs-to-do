import { getRouteText } from "@/utils/helperFunctions";
import { usePathname } from "next/navigation";
import React from "react";

function TitleHeading() {
  const pathname = usePathname();

  return (
    <div style={{ display: "flex", justifyContent: "space-between" }}>
      <h1>{getRouteText(pathname)}</h1>
    </div>
  );
}

export default TitleHeading;
