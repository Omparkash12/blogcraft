import React from "react";
import { BrowserRouter, Routes as RouterRoutes, Route } from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop";
import ErrorBoundary from "./components/ErrorBoundary";
// Add your imports here
import BlogPostsListingDashboard from "./pages/blog-posts-listing-dashboard";
import BlogPostCreationForm from "./pages/blog-post-creation-form";
import BlogPostDetailView from "./pages/blog-post-detail-view";
import BlogCraftHomepage from "./pages/blog-craft-homepage";
import NotFound from "./pages/NotFound";

const Routes = () => {
  return (
    <BrowserRouter>
      <ErrorBoundary>
      <ScrollToTop />
      <RouterRoutes>
        {/* Define your routes here */}
        <Route path="/" element={<BlogCraftHomepage />} />
        <Route path="/blog-craft-homepage" element={<BlogCraftHomepage />} />
        <Route path="/blog-posts-listing-dashboard" element={<BlogPostsListingDashboard />} />
        <Route path="/blog-post-creation-form" element={<BlogPostCreationForm />} />
        <Route path="/blog-post-detail-view" element={<BlogPostDetailView />} />
        <Route path="*" element={<NotFound />} />
      </RouterRoutes>
      </ErrorBoundary>
    </BrowserRouter>
  );
};

export default Routes;