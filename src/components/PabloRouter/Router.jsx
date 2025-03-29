import React from 'react';
import { useState, useEffect, Children } from 'react';
import { NAVIGATION_EVENTS } from './utils/utils.js';
import { match } from "path-to-regexp";

function Router({children, routes = [], defaultComponent: DefaultComponent = <h1>404 - No se encontró la Ruta especificada</h1>}) {
    console.log("Children: ", children);

    const [currentPath, setCurrentPath] = useState(window.location.pathname);
    
        useEffect(() => {
            const onLocationChange = () => {
                setCurrentPath(window.location.pathname);
            }
    
            window.addEventListener(NAVIGATION_EVENTS.PUSHSTATE, onLocationChange);
            window.addEventListener(NAVIGATION_EVENTS.POPSTATE, onLocationChange);
    
            return () => {
                window.removeEventListener(NAVIGATION_EVENTS.PUSHSTATE, onLocationChange);
                window.removeEventListener(NAVIGATION_EVENTS.POPSTATE, onLocationChange);
            }
        }, []);


    let routeParams = {};

    //add routes from children <Route /> components
    const routesFromChildren = Children.map(children, child  => {
        const {props, type} = child;	 //props: {path, Component}
        const {name} = type;  //name: Route
        const isRoute = name === "Route";

        if (!isRoute) return null;

        return props;
    }).filter(Boolean);


    const routesToUse = routes.concat(routesFromChildren);

    const Page = routesToUse.find(({path}) => {
        if (path === currentPath) return true;

        const matcherUrl = match(path, {decode: decodeURIComponent});
        const matched = matcherUrl(currentPath);

        if (!matched) return false;

        routeParams = matched.params;  //Guardamos los parámetros de la ruta

        return true;
    })?.Component;
    
    return (
        <Page routeParams={routeParams}></Page>
    )
}

export default Router