import React from "react";
import { ThemeProvider, Box, Container, Typography } from "@mui/material";

import { itens } from "./data/itens";
import { theme } from "./theme/theme";
import ItemTable from "./components/ItemTable";
import ItemCards from "./components/ItemCards";
import Footer from "./components/Footer";

export default function App() {
  const totalGeral = itens.reduce((s, i) => s + i.total_valor_vendido.reduce((a, b) => a + b, 0), 0);
  const totalItensGeral = itens.reduce((s, i) => s + i.quantidades.reduce((a, b) => a + b, 0), 0);

  return (
    <ThemeProvider theme={theme}>
      <Box
        sx={{
          minHeight: "100vh",
          background: "linear-gradient(135deg, #1a0f0f 0%, #2d1b69 50%, #000000 100%)",
          display: "flex",
          flexDirection: "column",
        }}
      >
        <Box sx={{ flex: 1, py: { xs: 3, sm: 4, md: 5 } }}>
          <Container maxWidth="lg">
            <Box sx={{ textAlign: "center", mb: { xs: 3, sm: 4 } }}>
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: { xs: 0.5, sm: 1.5, md: 2 },
                  mb: 2,
                  flexWrap: "nowrap",
                  px: { xs: 1, sm: 2 },
                }}
              >
                <Box
                  component="img"
                  src="/gifs/pumpking.gif"
                  alt="Pumpkin"
                  sx={{
                    width: { xs: 35, sm: 45, md: 60 },
                    height: { xs: 35, sm: 45, md: 60 },
                    flexShrink: 0,
                  }}
                />
                <Typography 
                  variant="h3" 
                  sx={{ 
                    color: "#fb923c", 
                    fontWeight: "bold",
                    fontSize: { xs: "1.1rem", sm: "1.75rem", md: "2.5rem", lg: "3rem" },
                    whiteSpace: "nowrap",
                    lineHeight: 1.2,
                  }}
                >
                  Halloween PokeMMO 2025 
                </Typography>
                <Box
                  component="img"
                  src="/gifs/pumpking.gif"
                  alt="Pumpkin"
                  sx={{
                    width: { xs: 35, sm: 45, md: 60 },
                    height: { xs: 35, sm: 45, md: 60 },
                    flexShrink: 0,
                  }}
                />
              </Box>
              <Typography 
                sx={{ 
                  color: "#d1d5db",
                  fontSize: { xs: "0.7rem", sm: "0.85rem", md: "0.95rem" },
                  px: { xs: 2, sm: 0 },
                  lineHeight: 1.4,
                }}
              >
                Meu farm no evento de Halloween 2025, mostrando o total ganho e a quantidade de itens vendidos.
              </Typography>
            </Box>

            <ItemTable itens={itens} totalGeral={totalGeral} totalItensGeral={totalItensGeral} />

            <ItemCards itens={itens} />
          </Container>
        </Box>

        <Footer />
      </Box>
    </ThemeProvider>
  );
}