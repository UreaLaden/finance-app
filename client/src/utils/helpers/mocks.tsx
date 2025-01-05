import { InitialEntry, MemoryRouter, Route, Routes } from "react-router-dom";

export interface iMockRouterProvider {
    initialEntries: InitialEntry[];
    children: React.ReactNode;
}

export const MockRouterProvider = ({ initialEntries, children }: iMockRouterProvider) => {
  return (
    <MemoryRouter initialEntries={initialEntries}>
      <Routes>
        <Route path="*" element={children} />
      </Routes>
    </MemoryRouter>
  );
};
