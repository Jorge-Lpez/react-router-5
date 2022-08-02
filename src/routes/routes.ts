import { lazy, LazyExoticComponent } from "react";
import { NoLazy } from '../01-lazyload/pages/NoLazy';



type JSXComponent = () => JSX.Element;

interface Route {
    to: string,
    path: string,
    name: string,
    Component: JSXComponent | LazyExoticComponent<JSXComponent> ,
    children?: []
}

// const LazyPages = lazy( () => import(/* webpackChunkName: "LazyPage1 */"../01-lazyload/pages/LazyPages"));
// const LazyPages2 = lazy( () => import(/* webpackChunkName: "LazyPage2 */"../01-lazyload/pages/LazyPages2"));
// const LazyPages3 = lazy( () => import(/* webpackChunkName: "LazyPage3 */"../01-lazyload/pages/LazyPages3"));
//const LazyLayout = lazy(() => import("../01-lazyload/layout/LazyLayout"));

export const route: Route[] = [
    {
        to: "/lazyinicio",
        path: "/lazyinicio",
        name: "Inicio Pages",
        Component: NoLazy
    },
    {
        to: "/lazyload",
        path: "/lazyload",
        name: "LazyPages 1",
        Component: lazy(() => import("../01-lazyload/layout/LazyLayout"))
    }
];



