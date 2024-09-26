import { loginRouter } from "@/modules/login/router/index.router";
import { MoradorRouter } from "@/modules/moradoresWeb/router/index.router";
import { createBrowserRouter } from "react-router-dom";

const router = createBrowserRouter([...loginRouter, ...MoradorRouter]);

export { router };
