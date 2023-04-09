import { QueryClient, QueryClientProvider } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";
import Recommender from "./pages/Recommender";
import Builder from "./pages/Builder";
import Library from "./pages/Library";
import About from "./pages/About";
import { Route, Routes } from "react-router-dom";
import Layout from "./components/Layout";
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 5 * 1000 * 60, // 5 minutes
      cacheTime: Infinity, // do not delete stale data
    },
  },
});
function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <ReactQueryDevtools initialIsOpen={false} />
      <Layout>
        <Routes>
          <Route path="/" element={<Recommender />} />
          <Route path="/builder" element={<Builder />} />
          <Route path="/library" element={<Library />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </Layout>
    </QueryClientProvider>
  );
}

export default App;
