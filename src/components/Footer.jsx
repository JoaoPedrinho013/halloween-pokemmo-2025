import React from "react";
import { Box, Container, Typography, Divider, IconButton } from "@mui/material";
import GitHubIcon from '@mui/icons-material/GitHub';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import ForumIcon from '@mui/icons-material/Forum';
import CustomTooltip from './Tooltip';

export default function Footer() {
  return (
    <Box
      component="footer"
      sx={{
        py: { xs: 4, md: 6 },
        background: 'linear-gradient(180deg, transparent 0%, rgba(17, 24, 39, 0.95) 100%)',
        borderTop: '2px solid rgba(251, 146, 60, 0.3)',
        width: '100%',
      }}
    >
      <Container maxWidth="lg">
        <Box 
          sx={{ 
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: { xs: 2, md: 4 },
            flexDirection: { xs: 'column', md: 'row' },
          }}
        >
          {/* GIF Grande do Pumpkin - ESQUERDA */}
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: 2,
              order: { xs: 2, md: 1 },
            }}
          >
            <Box
              component="img"
              src={`${import.meta.env.BASE_URL}gifs/pumpking.gif`}
              alt="Pumpkin"
              sx={{
                width: { xs: 150, sm: 200, md: 300 },
                height: { xs: 150, sm: 200, md: 300 },
              }}
            />

            {/* Botão de Download */}
            <Box
              component="a"
              href="https://pokemmo.com/downloads/"
              target="_blank"
              rel="noopener noreferrer"
              sx={{
                background: "linear-gradient(135deg, #fb923c 0%, #ea580c 50%, #9333ea 100%)",
                color: "#ffffff",
                px: { xs: 3, md: 4 },
                py: { xs: 1.2, md: 1.5 },
                borderRadius: "12px",
                fontWeight: 700,
                fontSize: { xs: "0.9rem", md: "1.1rem" },
                textDecoration: "none",
                textTransform: "uppercase",
                letterSpacing: "1px",
                border: "2px solid rgba(251, 146, 60, 0.5)",
                boxShadow: "0 4px 15px rgba(251, 146, 60, 0.4), 0 0 20px rgba(147, 51, 234, 0.3)",
                transition: "all 0.3s ease",
                position: "relative",
                overflow: "hidden",
                textAlign: "center",
                "&::before": {
                  content: '""',
                  position: "absolute",
                  top: 0,
                  left: "-100%",
                  width: "100%",
                  height: "100%",
                  background: "linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.3), transparent)",
                  transition: "left 0.5s",
                },
                "&:hover": {
                  transform: "translateY(-3px) scale(1.05)",
                  boxShadow: "0 6px 25px rgba(251, 146, 60, 0.6), 0 0 30px rgba(147, 51, 234, 0.5)",
                  borderColor: "#fb923c",
                  "&::before": {
                    left: "100%",
                  },
                },
                "&:active": {
                  transform: "translateY(-1px) scale(1.02)",
                },
              }}
            >
              Baixar PokeMMO
            </Box>
          </Box>

          {/* Conteúdo - DIREITA */}
          <Box 
            sx={{ 
              flex: 1, 
              display: 'flex', 
              flexDirection: 'column', 
              alignItems: 'center', 
              justifyContent: 'center',
              order: { xs: 1, md: 2 },
              width: { xs: '100%', md: 'auto' },
              px: { xs: 2, md: 0 },
            }}
          >
            {/* Título Principal */}
            <Typography
              variant="h4"
              sx={{
                color: '#fb923c',
                fontWeight: 700,
                mb: 1,
                textShadow: '0 0 20px rgba(251, 146, 60, 0.5)',
                fontSize: { xs: '1.5rem', sm: '2rem', md: '2.125rem' },
                textAlign: 'center',
              }}
            >
              Halloween PokeMMO 2025
            </Typography>

            {/* Subtítulo */}
            <Typography
              variant="h6"
              sx={{
                color: '#d1d5db',
                fontWeight: 400,
                mb: 3,
                fontSize: { xs: '0.875rem', sm: '1rem', md: '1.25rem' },
                textAlign: 'center',
              }}
            >
              Minhas redes sociais, contatos e forum do evento
            </Typography>

            <Divider
              sx={{
                my: 2,
                borderColor: 'rgba(251, 146, 60, 0.2)',
                width: '100%',
                maxWidth: '400px',
                mb: 3,
              }}
            />

            {/* Links Sociais com Ícones */}
            <Box
              sx={{
                display: 'flex',
                justifyContent: 'center',
                gap: { xs: 1.5, sm: 2 },
                mb: 3,
                flexWrap: 'wrap',
              }}
            >
              <CustomTooltip title="Visite meu GitHub" arrow placement="top">
                <IconButton
                  component="a"
                  href="https://github.com/JoaoPedrinho013"
                  target="_blank"
                  rel="noopener noreferrer"
                  sx={{
                    color: '#d1d5db',
                    '&:hover': {
                      color: '#fb923c',
                      transform: 'scale(1.1)',
                      transition: 'all 0.3s ease',
                    },
                  }}
                >
                  <GitHubIcon sx={{ fontSize: { xs: '1.8rem', md: '2.2rem' } }} />
                </IconButton>
              </CustomTooltip>

              <CustomTooltip title="Conecte-se no LinkedIn" arrow placement="top">
                <IconButton
                  component="a"
                  href="https://www.linkedin.com/in/joao-pedro-428b43271"
                  target="_blank"
                  rel="noopener noreferrer"
                  sx={{
                    color: '#d1d5db',
                    '&:hover': {
                      color: '#fb923c',
                      transform: 'scale(1.1)',
                      transition: 'all 0.3s ease',
                    },
                  }}
                >
                  <LinkedInIcon sx={{ fontSize: { xs: '1.8rem', md: '2.2rem' } }} />
                </IconButton>
              </CustomTooltip>

              <CustomTooltip title="Fale comigo no WhatsApp" arrow placement="top">
                <IconButton
                  component="a"
                  href="https://wa.me/5513981309727"
                  target="_blank"
                  rel="noopener noreferrer"
                  sx={{
                    color: '#d1d5db',
                    '&:hover': {
                      color: '#fb923c',
                      transform: 'scale(1.1)',
                      transition: 'all 0.3s ease',
                    },
                  }}
                >
                  <WhatsAppIcon sx={{ fontSize: { xs: '1.8rem', md: '2.2rem' } }} />
                </IconButton>
              </CustomTooltip>

              <CustomTooltip title="Veja o evento no Fórum" arrow placement="top">
                <IconButton
                  component="a"
                  href="https://forums.pokemmo.com/index.php?/topic/192933-changelog-halloween-2025"
                  target="_blank"
                  rel="noopener noreferrer"
                  sx={{
                    color: '#d1d5db',
                    '&:hover': {
                      color: '#fb923c',
                      transform: 'scale(1.1)',
                      transition: 'all 0.3s ease',
                    },
                  }}
                >
                  <ForumIcon sx={{ fontSize: { xs: '1.8rem', md: '2.2rem' } }} />
                </IconButton>
              </CustomTooltip>
            </Box>

            {/* Copyright */}
            <Typography
              variant="body2"
              sx={{
                color: '#6b7280',
                fontSize: { xs: '0.75rem', md: '0.875rem' },
                textAlign: 'center',
              }}
            >
              © {new Date().getFullYear()} Azien - Todos os direitos reservados
            </Typography>
          </Box>
        </Box>
      </Container>
    </Box>
  );
}