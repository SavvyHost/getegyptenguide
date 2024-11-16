// components/ContentLoader.tsx
import React from "react";
import { useRouter } from "next/router";
import { Box } from "@mui/material";
import { ReactElement } from "react";
import CircularLoader from "./CircularLoader";

interface ContentLoaderProps {
  children: ReactElement;
}

const ContentLoader: React.FC<ContentLoaderProps> = ({ children }) => {
  const [loading, setLoading] = React.useState(false);
  const router = useRouter();

  React.useEffect(() => {
    const handleStart = (url: string) => {
      if (url !== router.asPath) {
        setLoading(true);
      }
    };
    const handleComplete = (url: string) => {
      if (url === router.asPath) {
        setTimeout(() => setLoading(false), 300); // Small delay for smoother transition
      }
    };

    router.events.on("routeChangeStart", handleStart);
    router.events.on("routeChangeComplete", handleComplete);
    router.events.on("routeChangeError", handleComplete);

    return () => {
      router.events.off("routeChangeStart", handleStart);
      router.events.off("routeChangeComplete", handleComplete);
      router.events.off("routeChangeError", handleComplete);
    };
  }, [router]);

  return (
    <div className="min-h-screen flex flex-col">
      {loading && (
        <div
          className="fixed inset-x-0 top-[64px] bottom-0 bg-white/90 dark:bg-gray-900/90 backdrop-blur-sm 
                     flex flex-col items-center justify-center z-40 transition-opacity duration-300"
        >
          <div className="transform scale-100 transition-transform duration-300">
            <CircularLoader />
          </div>
          <Box className="mt-16 text-lg font-medium text-gray-600 dark:text-gray-300">
            Loading...
          </Box>
        </div>
      )}
      <div
        className={`flex-grow transition-opacity duration-300 ${
          loading ? "opacity-0" : "opacity-100"
        }`}
      >
        {children}
      </div>
    </div>
  );
};

export default ContentLoader;
