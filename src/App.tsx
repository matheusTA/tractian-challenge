import { QueryClientProvider } from "@tanstack/react-query";
import { queryClient } from "./lib/react-query";

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <div className="flex flex-1 justify-center items-center">hello</div>
    </QueryClientProvider>
  );
}

export default App;
