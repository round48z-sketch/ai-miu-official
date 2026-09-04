import { ImageResponse } from "next/og";

export const size = { width: 32, height: 32 };
export const contentType = "image/png";

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "#FFF3F6",
          color: "#E87892",
          fontSize: 15,
          letterSpacing: 1,
          fontWeight: 500,
        }}
      >
        M
      </div>
    ),
    size,
  );
}
