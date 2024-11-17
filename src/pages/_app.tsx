import Layout from "@/components/organisms/Layout";
import { WishlistProvider } from "@/contexts/wishlist-context";
import "@/styles/globals.css";
import "react-toastify/dist/ReactToastify.css";
import { AppCacheProvider } from "@mui/material-nextjs/v13-pagesRouter";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import type { AppProps } from "next/app";
import { ToastContainer } from "react-toastify";
import FullPageLoader from "@/components/atoms/LoadingIndicator";

const theme = createTheme({
  typography: {
    // fontFamily: Roboto.style.fontFamily,
  },
  direction: "ltr",
});

export default function App(props: AppProps) {
  const { Component, pageProps } = props;
  const queryClient = new QueryClient({
    defaultOptions: {
      queries: { refetchOnWindowFocus: false },
    },
  });

  return (
    <QueryClientProvider client={queryClient}>
      <AppCacheProvider {...props}>
        <ThemeProvider theme={theme}>
          <WishlistProvider>
            <Layout>
              <FullPageLoader>
                <Component {...pageProps} />
              </FullPageLoader>
            </Layout>
          </WishlistProvider>
        </ThemeProvider>
      </AppCacheProvider>
      <ToastContainer />
    </QueryClientProvider>
  );
}
