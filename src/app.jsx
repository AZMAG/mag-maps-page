import { useRef, useEffect } from "react";
import { BrowserRouter } from "react-router";
import ReactGA from "react-ga4";
import DocConfig from "./config/docConfig";
import AppRoutes from "./routes/Routes";
import ScrollToTop from "./components/scroll-to-top/ScrollToTop";
import { DataProvider } from "./stores/DataContext";

export default function App() {
  const env = import.meta.env.MODE;

  const base =
    env === "production"
      ? import.meta.env.VITE_APP_BASENAME_PROD
      : env === "test"
        ? import.meta.env.VITE_APP_BASENAME_TEST
        : import.meta.env.VITE_APP_BASENAME_DEV;

  // Google Analytics
  useEffect(() => {
    if (env === "production") {
      ReactGA.initialize(DocConfig.analytics.measurementId, {
        debug: true,
        titleCase: false,
        gaOptions: {},
      });
      ReactGA.send({ hitType: "pageview", page: window.location.pathname });
    } else if (env === "test") {
      console.log("Google Analytics not initialized — Test Build Mode");
    } else {
      console.log("Google Analytics not initialized — Development Mode");
    }
  }, [env]);

  const containerRef = useRef();

  return (
    <div
      className="flex h-screen w-screen flex-col overflow-x-hidden scroll-smooth"
      ref={containerRef}
    >
      <BrowserRouter basename={base}>
        <DataProvider>
          <AppRoutes />
        </DataProvider>
      </BrowserRouter>
      <ScrollToTop containerRef={containerRef} />
    </div>
  );
}
