
import type { RouteObject } from "react-router-dom";
import NotFound from "../pages/NotFound";
import Home from "../pages/home/page";
import QuemSomos from "../pages/quem-somos/page";
import AreasAtuacao from "../pages/areas-atuacao/page";
import Equipe from "../pages/equipe/page";
import Blog from "../pages/blog/page";
import Contato from "../pages/contato/page";
import PoliticaPrivacidade from "../pages/politica-privacidade/page";

const routes: RouteObject[] = [
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/quem-somos",
    element: <QuemSomos />,
  },
  {
    path: "/areas-atuacao",
    element: <AreasAtuacao />,
  },
  {
    path: "/equipe",
    element: <Equipe />,
  },
  {
    path: "/blog",
    element: <Blog />,
  },
  {
    path: "/contato",
    element: <Contato />,
  },
  {
    path: "/politica-privacidade",
    element: <PoliticaPrivacidade />,
  },
  {
    path: "*",
    element: <NotFound />,
  },
];

export default routes;
