import React from "react";
import Slider from "react-slick";
import { Card, CardContent, Typography, Box } from "@mui/material";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function ItemCards({ itens }) {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    autoplay: true,
    autoplaySpeed: 2500,
    arrows: false,
    slidesToShow: 3,
    slidesToScroll: 1,

    responsive: [
      { breakpoint: 1024, settings: { slidesToShow: 1 } },
      { breakpoint: 600, settings: { slidesToShow: 1 } },
    ],
  };

  return (
    <Box sx={{ width: "100%", maxWidth: 1200, margin: "0 auto" }}>

      {/* 🔥 Slick Dots personalizados: risquinhos brancos */}
      <style>{`
        .slick-dots {
          bottom: -10px;
        }

        .slick-dots li {
          width: 30px;
          margin: 0 4px;
        }

        .slick-dots li button:before {
          content: "";
          width: 30px;
          height: 4px;
          background: white;
          border-radius: 4px;
          opacity: 0.3; /* não ativo */
        }

        .slick-dots li.slick-active button:before {
          opacity: 1; /* ativo */
          background: white;
        }
      `}</style>

      <Slider {...settings}>
        {itens.map((item, index) => {
          const total = item.total_valor_vendido.reduce((a, b) => a + b, 0);

          return (
            <Box key={index} sx={{ padding: 2 }}>
              <Card
                sx={{
                  height: "100%",
                  background:
                    index % 2 === 0
                      ? "rgba(31, 41, 55, 0.5)"
                      : "rgba(17, 24, 39, 0.5)",
                  border: "1px solid rgba(251, 146, 60, 0.3)",
                  transition: "0.3s",
                  "&:hover": {
                    backgroundColor: "rgba(234, 88, 12, 0.2)",
                    borderColor: "#fb923c",
                    boxShadow: "0 8px 20px rgba(251, 146, 60, 0.3)",
                  },
                }}
              >
                <CardContent>
                  <Typography
                    variant="subtitle2"
                    sx={{
                      color: "#fdba74",
                      fontWeight: 500,
                      mb: 1.5,
                      whiteSpace: "nowrap",
                      overflow: "hidden",
                      textOverflow: "ellipsis",
                    }}
                  >
                    {item.nome}
                  </Typography>

                  <Typography
                    variant="h5"
                    sx={{
                      color: "#fbbf24",
                      fontFamily: "monospace",
                      fontWeight: "bold",
                      mb: 0.5,
                    }}
                  >
                    ¥{total.toLocaleString()}
                  </Typography>

                  <Typography variant="caption" sx={{ color: "#9ca3af" }}>
                    {item.quantidades.length} transações
                  </Typography>
                </CardContent>
              </Card>
            </Box>
          );
        })}
      </Slider>
    </Box>
  );
}
