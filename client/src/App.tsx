import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { ScrollToTop } from "@/components/ScrollToTop";
import { LanguageProvider } from "@/contexts/LanguageContext";
import NotFound from "@/pages/not-found";

import { Homepage } from "@/pages/Homepage";
import { AboutUs } from "@/pages/AboutUs";
import { Solutions } from "@/pages/Solutions";
import { Pricing } from "@/pages/Pricing";
import { Contact } from "@/pages/Contact";
import { Policies } from "@/pages/Policies";
import { Blog } from "@/pages/Blog";
import { BlogArticle } from "@/pages/BlogArticle";

function Router() {
  return (
    <>
      <ScrollToTop />
      <Switch>
        <Route path="/" component={Homepage} />
        <Route path="/about" component={AboutUs} />
        <Route path="/solutions" component={Solutions} />
        <Route path="/pricing" component={Pricing} />
        <Route path="/contact" component={Contact} />
        <Route path="/policies" component={Policies} />
        <Route path="/blog" component={Blog} />
        <Route path="/blog/:slug" component={BlogArticle} />
        
        <Route path="/:lang(ru|en)" component={Homepage} />
        <Route path="/:lang(ru|en)/about" component={AboutUs} />
        <Route path="/:lang(ru|en)/solutions" component={Solutions} />
        <Route path="/:lang(ru|en)/pricing" component={Pricing} />
        <Route path="/:lang(ru|en)/contact" component={Contact} />
        <Route path="/:lang(ru|en)/policies" component={Policies} />
        <Route path="/:lang(ru|en)/blog" component={Blog} />
        <Route path="/:lang(ru|en)/blog/:slug" component={BlogArticle} />
        
        <Route component={NotFound} />
      </Switch>
    </>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <LanguageProvider>
        <TooltipProvider>
          <Toaster />
          <Router />
        </TooltipProvider>
      </LanguageProvider>
    </QueryClientProvider>
  );
}

export default App;
