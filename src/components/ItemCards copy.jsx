import React from "react";
import { Grid, Card, CardContent, Typography, Box } from "@mui/material";

export default function ItemCards({ itens }) {
  return (
    <Box 
      sx={{ 
        display: 'flex', 
        justifyContent: 'center', 
        width: '100%',
        px: { xs: 0, sm: 2 }
      }}
    >
      <Box 
        sx={{ 
          width: '100%', 
          maxWidth: { xs: '100%', sm: '90%' }
        }}
      >
        <Grid 
          container 
          spacing={{ xs: 2, sm: 2.5, md: 3 }}
          sx={{
            justifyContent: 'center',
            margin: 0,
            width: '100%',
          }}
        >
          {itens.map((item, index) => {
            const total = item.total_valor_vendido.reduce((a, b) => a + b, 0);

            return (
              <Grid 
                item
                key={index}

                /* MOBILE → sempre 1 por linha */
                xs={12}

                /* TABLET → volta para o original (2 por linha) */
                sm={6}

                /* DESKTOP → igual ao original */
                md={4}

                sx={{
                  display: 'flex',
                  justifyContent: 'center',
                  px: { xs: 2, sm: 0 },
                }}
              >
                <Card
                  sx={{
                    background: index % 2 === 0 
                      ? 'rgba(31, 41, 55, 0.5)' 
                      : 'rgba(17, 24, 39, 0.5)',
                    border: '1px solid rgba(251, 146, 60, 0.3)',
                    transition: 'all 0.3s ease',

                    width: '100%',
                    maxWidth: { xs: '95%', sm: '100%', md: '100%' },

                    '&:hover': { 
                      backgroundColor: 'rgba(234, 88, 12, 0.2)',
                      borderColor: '#fb923c',
                      boxShadow: '0 8px 20px rgba(251, 146, 60, 0.3)',
                    },
                  }}
                >
                  <CardContent sx={{ p: { xs: 2, sm: 2.5 } }}>
                    
                    <Typography
                      variant="subtitle2"
                      sx={{
                        color: '#fdba74',
                        fontWeight: 500,
                        mb: 1.5,
                        fontSize: { xs: '0.875rem', sm: '0.95rem' },
                        whiteSpace: 'nowrap',
                        overflow: 'hidden',
                        textOverflow: 'ellipsis',
                      }}
                    >
                      {item.nome}
                    </Typography>

                    <Typography
                      variant="h5"
                      sx={{ 
                        color: '#fbbf24', 
                        fontFamily: 'monospace', 
                        fontWeight: 'bold',
                        fontSize: { xs: '1.35rem', sm: '1.5rem' },
                        mb: 0.5,
                      }}
                    >
                      ¥{total.toLocaleString()}
                    </Typography>

                    <Typography 
                      variant="caption" 
                      sx={{ 
                        color: '#9ca3af', 
                        display: 'block',
                        fontSize: { xs: '0.75rem', sm: '0.8rem' },
                      }}
                    >
                      {item.quantidades.length} transações
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
            );
          })}
        </Grid>
      </Box>
    </Box>
  );
}
