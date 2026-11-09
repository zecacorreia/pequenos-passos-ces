import { ImageResponse } from "next/og";

export const size = { width: 64, height: 64 };
export const contentType = "image/png";

/** Favicon: mini torre de argolas do logo, sobre fundo creme arredondado. */
export default function Icon() {
  const rings = [
    { w: 22, c: "#f2a7b6" },
    { w: 32, c: "#f2c05f" },
    { w: 42, c: "#aa81a3" },
    { w: 52, c: "#cd828c" },
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
          borderRadius: 16,
        }}
      >
        <div
          style={{
            width: 12,
            height: 12,
            borderRadius: 12,
            background: "#ec9c8b",
            marginBottom: 2,
          }}
        />
        {rings.map((r) => (
          <div
            key={r.w}
            style={{
              width: r.w,
              height: 9,
              borderRadius: 9,
              background: r.c,
              marginTop: 2,
            }}
          />
        ))}
      </div>
    ),
    size,
  );
}
