import { Route } from "./route";
import { RouteCollection } from "./route-collection";

export class Router {
    constructor(ioc) {
        this.routeCollection = ioc.use(RouteCollection);
    }

    init() {
        this.execute();

        window.onhashchange = () => {
            this.execute();
        };
    }

    execute() {
        /** @type {Array.<Route>} */
        const routes = this.routeCollection.getRoutes();
        routes.sort((a, b) => a.sortOrder() - b.sortOrder());

        const hash = window.location.hash;
        for (let route of routes) {
            if (route.isMatch(hash)) {
                route.render();
                console.log('Router.execute()');
                return;
            }
        }

        console.error('Router.execute() route not found');
    }
}