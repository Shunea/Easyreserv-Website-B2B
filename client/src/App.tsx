import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/not-found";

import { Homepage } from "@/pages/Homepage";
import { AboutUs } from "@/pages/AboutUs";
import { Solutions } from "@/pages/Solutions";
import { Pricing } from "@/pages/Pricing";

function Router() {
  return (
    <Switch>
      {/* Add pages below */}
      <Route path="/" component={Homepage} />
      <Route path="/about" component={AboutUs} />
      <Route path="/solutions" component={Solutions} />
      <Route path="/pricing" component={Pricing} />
      {/* Fallback to 404 */}
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Router />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
