import React, { useState } from "react";
import {
  Table, TableBody, TableCell, TableContainer, TableHead, TableRow,
  Paper, Avatar, TableSortLabel, Box, Typography, useMediaQuery, useTheme
} from "@mui/material";

export default function ItemTable({ itens, totalGeral, totalItensGeral }) {
  const [orderBy, setOrderBy] = useState('');
  const [order, setOrder] = useState('asc');
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const isTablet = useMediaQuery(theme.breakpoints.down('md'));

  const handleSort = (property) => {
    const isAsc = orderBy === property && order === 'asc';
    setOrder(isAsc ? 'desc' : 'asc');
    setOrderBy(property);
  };

  const getSortedItems = () => {
    const itemsWithStats = itens.map((item) => {
      const totalItens = item.quantidades.reduce((a, b) => a + b, 0);
      const media = item.valores.reduce((a, b) => a + b, 0) / item.valores.length;
      const minimo = Math.min(...item.valores);
      const maximo = Math.max(...item.valores);
      const total = item.total_valor_vendido.reduce((a, b) => a + b, 0);
      
      return {
        ...item,
        totalItens,
        media,
        minimo,
        maximo,
        total
      };
    });

    if (!orderBy) return itemsWithStats;

    return [...itemsWithStats].sort((a, b) => {
      let aValue, bValue;

      switch (orderBy) {
        case 'nome':
          aValue = a.nome.toLowerCase();
          bValue = b.nome.toLowerCase();
          break;
        case 'total':
          aValue = a.totalItens;
          bValue = b.totalItens;
          break;
        case 'media':
          aValue = a.media;
          bValue = b.media;
          break;
        case 'minimo':
          aValue = a.minimo;
          bValue = b.minimo;
          break;
        case 'maximo':
          aValue = a.maximo;
          bValue = b.maximo;
          break;
        case 'totalVendido':
          aValue = a.total;
          bValue = b.total;
          break;
        default:
          return 0;
      }

      if (order === 'asc') {
        return aValue > bValue ? 1 : aValue < bValue ? -1 : 0;
      } else {
        return aValue < bValue ? 1 : aValue > bValue ? -1 : 0;
      }
    });
  };

  const sortedItems = getSortedItems();

  // Versão mobile com cards
  if (isMobile) {
    return (
      <Box sx={{ mb: 4 }}>
        {sortedItems.map((item, index) => {
          const totalItens = item.quantidades.reduce((a, b) => a + b, 0);
          const media = item.valores.reduce((a, b) => a + b, 0) / item.valores.length;
          const minimo = Math.min(...item.valores);
          const maximo = Math.max(...item.valores);
          const total = item.total_valor_vendido.reduce((a, b) => a + b, 0);

          return (
            <Paper
              key={index}
              sx={{
                background: '#111827',
                border: '1px solid rgba(251, 146, 60, 0.3)',
                p: 2,
                mb: 2,
              }}
            >
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mb: 2 }}>
                <Avatar
                  src={item.imagem}
                  alt={item.nome}
                  sx={{
                    width: 60,
                    height: 60,
                    border: '2px solid #fb923c',
                    boxShadow: '0 0 10px rgba(251, 146, 60, 0.5)',
                  }}
                />
                <Typography sx={{ color: '#fdba74', fontWeight: 600, flex: 1 }}>
                  {item.nome}
                </Typography>
              </Box>

              <Box sx={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 1 }}>
                <Box>
                  <Typography variant="caption" sx={{ color: '#9ca3af' }}>Total:</Typography>
                  <Typography sx={{ color: '#fff', fontWeight: 500 }}>{totalItens.toLocaleString()}</Typography>
                </Box>
                <Box>
                  <Typography variant="caption" sx={{ color: '#9ca3af' }}>Média:</Typography>
                  <Typography sx={{ color: '#fff', fontWeight: 500 }}>¥{Math.round(media).toLocaleString()}</Typography>
                </Box>
                <Box>
                  <Typography variant="caption" sx={{ color: '#9ca3af' }}>Mín:</Typography>
                  <Typography sx={{ color: '#fff', fontWeight: 500 }}>¥{minimo.toLocaleString()}</Typography>
                </Box>
                <Box>
                  <Typography variant="caption" sx={{ color: '#9ca3af' }}>Máx:</Typography>
                  <Typography sx={{ color: '#fff', fontWeight: 500 }}>¥{maximo.toLocaleString()}</Typography>
                </Box>
              </Box>

              <Box sx={{ mt: 2, pt: 2, borderTop: '1px solid rgba(251, 146, 60, 0.2)' }}>
                <Typography variant="caption" sx={{ color: '#9ca3af' }}>Total Vendido:</Typography>
                <Typography sx={{ color: '#fbbf24', fontWeight: 700, fontSize: '1.1rem' }}>
                  ¥{total.toLocaleString()}
                </Typography>
              </Box>
            </Paper>
          );
        })}

        {/* Total Geral */}
        <Paper
          sx={{
            background: 'linear-gradient(90deg, #9333ea 0%, #ea580c 100%)',
            p: 2,
            mt: 3,
          }}
        >
          <Typography sx={{ color: 'white', fontWeight: 700, mb: 1 }}>TOTAL GERAL</Typography>
          <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <Box>
              <Typography variant="caption" sx={{ color: 'rgba(255,255,255,0.8)' }}>Total de Itens:</Typography>
              <Typography sx={{ color: 'white', fontWeight: 600 }}>
                {totalItensGeral.toLocaleString()}
              </Typography>
            </Box>
            <Box sx={{ textAlign: 'right' }}>
              <Typography variant="caption" sx={{ color: 'rgba(255,255,255,0.8)' }}>Total Vendido:</Typography>
              <Typography sx={{ color: '#fef08a', fontWeight: 700, fontSize: '1.2rem' }}>
                ¥{totalGeral.toLocaleString()}
              </Typography>
            </Box>
          </Box>
        </Paper>
      </Box>
    );
  }

  // Versão tablet e desktop
  return (
    <TableContainer
      component={Paper}
      sx={{
        background: '#111827',
        boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.5)',
        border: '1px solid rgba(251, 146, 60, 0.3)',
        mb: 4,
        overflowX: 'auto',
      }}
    >
      <Table sx={{ minWidth: isTablet ? 600 : 800 }}>
        <TableHead
          sx={{ background: 'linear-gradient(90deg, #ea580c 0%, #9333ea 100%)' }}
        >
          <TableRow>
            <TableCell sx={{ color: 'white', fontWeight: 600, fontSize: { xs: '0.75rem', md: '0.875rem' } }}>
              Item
            </TableCell>
            <TableCell sx={{ color: 'white', fontWeight: 600, fontSize: { xs: '0.75rem', md: '0.875rem' } }}>
              <TableSortLabel
                active={orderBy === 'nome'}
                direction={orderBy === 'nome' ? order : 'asc'}
                onClick={() => handleSort('nome')}
                sx={{
                  color: 'white !important',
                  '&:hover': { color: '#fb923c !important' },
                  '&.Mui-active': { color: '#fb923c !important' },
                  '& .MuiTableSortLabel-icon': { color: '#fb923c !important' },
                }}
              >
                Nome
              </TableSortLabel>
            </TableCell>
            <TableCell align="center" sx={{ color: 'white', fontWeight: 600, fontSize: { xs: '0.75rem', md: '0.875rem' } }}>
              <TableSortLabel
                active={orderBy === 'total'}
                direction={orderBy === 'total' ? order : 'asc'}
                onClick={() => handleSort('total')}
                sx={{
                  color: 'white !important',
                  '&:hover': { color: '#fb923c !important' },
                  '&.Mui-active': { color: '#fb923c !important' },
                  '& .MuiTableSortLabel-icon': { color: '#fb923c !important' },
                }}
              >
                Total
              </TableSortLabel>
            </TableCell>
            <TableCell align="center" sx={{ color: 'white', fontWeight: 600, fontSize: { xs: '0.75rem', md: '0.875rem' } }}>
              <TableSortLabel
                active={orderBy === 'media'}
                direction={orderBy === 'media' ? order : 'asc'}
                onClick={() => handleSort('media')}
                sx={{
                  color: 'white !important',
                  '&:hover': { color: '#fb923c !important' },
                  '&.Mui-active': { color: '#fb923c !important' },
                  '& .MuiTableSortLabel-icon': { color: '#fb923c !important' },
                }}
              >
                Média
              </TableSortLabel>
            </TableCell>
            <TableCell align="center" sx={{ color: 'white', fontWeight: 600, fontSize: { xs: '0.75rem', md: '0.875rem' } }}>
              <TableSortLabel
                active={orderBy === 'minimo'}
                direction={orderBy === 'minimo' ? order : 'asc'}
                onClick={() => handleSort('minimo')}
                sx={{
                  color: 'white !important',
                  '&:hover': { color: '#fb923c !important' },
                  '&.Mui-active': { color: '#fb923c !important' },
                  '& .MuiTableSortLabel-icon': { color: '#fb923c !important' },
                }}
              >
                Mín.
              </TableSortLabel>
            </TableCell>
            <TableCell align="center" sx={{ color: 'white', fontWeight: 600, fontSize: { xs: '0.75rem', md: '0.875rem' } }}>
              <TableSortLabel
                active={orderBy === 'maximo'}
                direction={orderBy === 'maximo' ? order : 'asc'}
                onClick={() => handleSort('maximo')}
                sx={{
                  color: 'white !important',
                  '&:hover': { color: '#fb923c !important' },
                  '&.Mui-active': { color: '#fb923c !important' },
                  '& .MuiTableSortLabel-icon': { color: '#fb923c !important' },
                }}
              >
                Máx.
              </TableSortLabel>
            </TableCell>
            <TableCell align="center" sx={{ color: 'white', fontWeight: 600, fontSize: { xs: '0.75rem', md: '0.875rem' } }}>
              <TableSortLabel
                active={orderBy === 'totalVendido'}
                direction={orderBy === 'totalVendido' ? order : 'asc'}
                onClick={() => handleSort('totalVendido')}
                sx={{
                  color: 'white !important',
                  '&:hover': { color: '#fb923c !important' },
                  '&.Mui-active': { color: '#fb923c !important' },
                  '& .MuiTableSortLabel-icon': { color: '#fb923c !important' },
                }}
              >
                Total Vendido
              </TableSortLabel>
            </TableCell>
          </TableRow>
        </TableHead>

        <TableBody>
          {sortedItems.map((item, index) => {
            const totalItens = item.quantidades.reduce((a, b) => a + b, 0);
            const media = item.valores.reduce((a, b) => a + b, 0) / item.valores.length;
            const minimo = Math.min(...item.valores);
            const maximo = Math.max(...item.valores);
            const total = item.total_valor_vendido.reduce((a, b) => a + b, 0);

            return (
              <TableRow
                key={index}
                sx={{
                  '&:hover': { backgroundColor: 'rgba(234, 88, 12, 0.2)' },
                  backgroundColor:
                    index % 2 === 0
                      ? 'rgba(31, 41, 55, 0.5)'
                      : 'rgba(17, 24, 39, 0.5)',
                }}
              >
                <TableCell align="center">
                  <Avatar
                    src={item.imagem}
                    alt={item.nome}
                    sx={{
                      width: { xs: 40, md: 50 },
                      height: { xs: 40, md: 50 },
                      border: '2px solid #fb923c',
                      boxShadow: '0 0 10px rgba(251, 146, 60, 0.5)',
                      margin: '0 auto'
                    }}
                  />
                </TableCell>
                <TableCell sx={{ color: '#fdba74', fontWeight: 500, fontSize: { xs: '0.75rem', md: '0.875rem' } }}>
                  {item.nome}
                </TableCell>
                <TableCell align="center" sx={{ fontSize: { xs: '0.75rem', md: '0.875rem' } }}>
                  {totalItens.toLocaleString()}
                </TableCell>
                <TableCell align="center" sx={{ fontSize: { xs: '0.75rem', md: '0.875rem' } }}>
                  ¥{Math.round(media).toLocaleString()}
                </TableCell>
                <TableCell align="center" sx={{ fontSize: { xs: '0.75rem', md: '0.875rem' } }}>
                  ¥{minimo.toLocaleString()}
                </TableCell>
                <TableCell align="center" sx={{ fontSize: { xs: '0.75rem', md: '0.875rem' } }}>
                  ¥{maximo.toLocaleString()}
                </TableCell>
                <TableCell align="center" sx={{ fontSize: { xs: '0.75rem', md: '0.875rem' } }}>
                  ¥{total.toLocaleString()}
                </TableCell>
              </TableRow>
            );
          })}
        </TableBody>

        <TableHead sx={{ background: 'linear-gradient(90deg, #9333ea 0%, #ea580c 100%)' }}>
          <TableRow>
            <TableCell />
            <TableCell sx={{ color: 'white', fontWeight: 'bold', fontSize: { xs: '0.75rem', md: '0.875rem' } }}>
              TOTAL GERAL
            </TableCell>
            <TableCell align="center" sx={{ color: 'white', fontWeight: 'bold', fontSize: { xs: '0.75rem', md: '0.875rem' } }}>
              {totalItensGeral.toLocaleString()}
            </TableCell>
            <TableCell align="center" sx={{ color: 'white', fontSize: { xs: '0.75rem', md: '0.875rem' } }}>-</TableCell>
            <TableCell align="center" sx={{ color: 'white', fontSize: { xs: '0.75rem', md: '0.875rem' } }}>-</TableCell>
            <TableCell align="center" sx={{ color: 'white', fontSize: { xs: '0.75rem', md: '0.875rem' } }}>-</TableCell>
            <TableCell align="center" sx={{ color: '#fef08a', fontWeight: 'bold', fontSize: { xs: '0.875rem', md: '1rem' } }}>
              ¥{totalGeral.toLocaleString()}
            </TableCell>
          </TableRow>
        </TableHead>
      </Table>
    </TableContainer>
  );
}