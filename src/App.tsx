import {
  QueryClient,
  QueryClientProvider,
  Provider,
  ThemeProvider,
  store,
  RouterProvider,
  route,
  ReactQueryDevtools,
} from "./index";

const queryClient = new QueryClient();

function App() {
  return (
    <>
      <QueryClientProvider client={queryClient}>
        <Provider store={store}>
          <ThemeProvider>
            <RouterProvider router={route} />
          </ThemeProvider>
        </Provider>
        <ReactQueryDevtools initialIsOpen={false} />
      </QueryClientProvider>
    </>
  );
}

export default App;
