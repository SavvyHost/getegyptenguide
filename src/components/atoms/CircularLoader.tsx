// components/CircularLoader.tsx
import React from "react";
import { Box, CircularProgress } from "@mui/material";

const CircularLoader: React.FC = () => {
  return (
    <div className="relative flex items-center justify-center">
      {/* Outer rotating ring */}
      <CircularProgress
        size={120}
        thickness={2}
        sx={{
          color: "primary.main",
          position: "absolute",
          animation: "rotate 2s linear infinite",
          "@keyframes rotate": {
            "0%": {
              transform: "rotate(0deg)",
            },
            "100%": {
              transform: "rotate(360deg)",
            },
          },
        }}
      />

      {/* Middle ring */}
      <CircularProgress
        size={90}
        thickness={3}
        sx={{
          color: "secondary.main",
          position: "absolute",
          animation: "rotate 1.5s linear infinite reverse",
        }}
      />

      {/* Inner ring */}
      <CircularProgress
        size={60}
        thickness={4}
        sx={{
          color: "primary.light",
          position: "absolute",
          animation: "rotate 1s linear infinite",
        }}
      />

      {/* Center dot */}
      <div className="w-3 h-3 rounded-full bg-primary animate-pulse" />
    </div>
  );
};

export default CircularLoader;
