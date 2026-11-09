import { ImageResponse } from "next/og";

export const alt =
  "Pequenos Passos: apoio à seletividade alimentar de crianças com autismo";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

/** Social preview (Open Graph e Twitter), 1200x630. */
export default function OpenGraphImage() {
  const rings = [
    { w: 190, c: "#f9c7d6" },
    { w: 250, c: "#f2c05f" },
    { w: 310, c: "#aa81a3" },
    { w: 370, c: "#cd828c" },
  ];
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          padding: "0 80px",
          background:
            "linear-gradient(135deg, #fff9f4 0%, #fbdde6 55%, #dcebea 100%)",
        }}
      >
        <div style={{ display: "flex", flexDirection: "column", maxWidth: 660 }}>
          <div
            style={{
              display: "flex",
              alignSelf: "flex-start",
              padding: "10px 24px",
              borderRadius: 999,
              background: "#dcebea",
              color: "#3f6f6e",
              fontSize: 26,
              fontWeight: 700,
            }}
          >
            Projeto de Extensão · Nutrição · CES/UFCG
          </div>
          <div
            style={{
              display: "flex",
              marginTop: 28,
              fontSize: 104,
              fontWeight: 800,
              lineHeight: 1,
              color: "#3f6f6e",
            }}
          >
            Pequenos Passos
          </div>
          <div
            style={{
              display: "flex",
              marginTop: 28,
              fontSize: 36,
              lineHeight: 1.3,
              color: "#5b4f61",
            }}
          >
            Apoio a crianças com autismo e suas famílias na seletividade
            alimentar.
          </div>
        </div>

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <div
            style={{
              width: 64,
              height: 64,
              borderRadius: 64,
              background: "#ec9c8b",
              marginBottom: 8,
            }}
          />
          {rings.map((r) => (
            <div
              key={r.w}
              style={{
                width: r.w,
                height: 62,
                borderRadius: 62,
                background: r.c,
                marginTop: 8,
              }}
            />
          ))}
        </div>
      </div>
    ),
    size,
  );
}
