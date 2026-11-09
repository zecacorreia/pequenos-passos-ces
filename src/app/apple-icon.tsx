import { ImageResponse } from "next/og";

export const size = { width: 180, height: 180 };
export const contentType = "image/png";

/** Ícone para tela inicial do iOS. */
export default function AppleIcon() {
  const rings = [
    { w: 62, c: "#f2a7b6" },
    { w: 90, c: "#f2c05f" },
    { w: 118, c: "#aa81a3" },
    { w: 146, c: "#cd828c" },
  ];
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          background: "#fff9f4",
        }}
      >
        <div
          style={{
            width: 32,
            height: 32,
            borderRadius: 32,
            background: "#ec9c8b",
            marginBottom: 6,
          }}
        />
        {rings.map((r) => (
          <div
            key={r.w}
            style={{
              width: r.w,
              height: 26,
              borderRadius: 26,
              background: r.c,
              marginTop: 6,
            }}
          />
        ))}
      </div>
    ),
    size,
  );
}
