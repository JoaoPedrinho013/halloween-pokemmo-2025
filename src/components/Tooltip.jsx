import React from "react";
import { Tooltip as MuiTooltip, tooltipClasses } from "@mui/material";
import { styled } from "@mui/material/styles";

const CustomTooltip = styled(({ className, ...props }) => (
  <MuiTooltip {...props} classes={{ popper: className }} />
))(() => ({
  [`& .${tooltipClasses.tooltip}`]: {
    backgroundColor: '#1f2937',
    color: '#fb923c',
    fontSize: '0.875rem',
    fontWeight: 600,
    padding: '10px 16px',
    borderRadius: '8px',
    border: '2px solid rgba(251, 146, 60, 0.5)',
    boxShadow: '0 4px 15px rgba(251, 146, 60, 0.3), 0 0 20px rgba(147, 51, 234, 0.2)',
    backdropFilter: 'blur(10px)',
  },
  [`& .${tooltipClasses.arrow}`]: {
    color: '#1f2937',
    '&::before': {
      border: '2px solid rgba(251, 146, 60, 0.5)',
    },
  },
}));

export default CustomTooltip;