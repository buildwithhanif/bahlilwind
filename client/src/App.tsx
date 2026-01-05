import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/NotFound";
import { Route, Switch } from "wouter";
import ErrorBoundary from "./components/ErrorBoundary";
import { ThemeProvider } from "./contexts/ThemeContext";
import Home from "./pages/Home";


import { useLocation } from "wouter";

function Router() {
  // Wouter doesn't natively support base path, so we need to handle it manually
  // or use a custom hook, but for simple deployment, we can just add the base path to routes
  // or rely on the fact that GitHub Pages serves from subdirectory.
  
  // However, wouter's default router uses location.pathname which includes the base path.
  // We need to configure the router to ignore the base path or match against it.
  
  // A simpler approach for GitHub Pages with wouter is to use a base path in the Router component if available,
  // but wouter v3 doesn't have a 'base' prop on Router.
  
  // Let's try matching the base path explicitly.
  const base = "/bahlilwind";
  
  return (
    <Switch>
      <Route path={base + "/"} component={Home} />
      <Route path={"/"} component={Home} /> {/* Fallback for local dev */}
      <Route path={base + "/404"} component={NotFound} />
      <Route path={"/404"} component={NotFound} />
      {/* Final fallback route */}
      <Route component={NotFound} />
    </Switch>
  );
}

// NOTE: About Theme
// - First choose a default theme according to your design style (dark or light bg), than change color palette in index.css
//   to keep consistent foreground/background color across components
// - If you want to make theme switchable, pass `switchable` ThemeProvider and use `useTheme` hook

function App() {
  return (
    <ErrorBoundary>
      <ThemeProvider
        defaultTheme="light"
        // switchable
      >
        <TooltipProvider>
          <Toaster />
          <Router />
        </TooltipProvider>
      </ThemeProvider>
    </ErrorBoundary>
  );
}

export default App;
