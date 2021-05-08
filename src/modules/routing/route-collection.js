import { Route } from "./route";

export class RouteCollection {
    constructor(ioc) {
        const routes = [];

        this.getRoutes = () => [...routes];

        this.addRoute = route => {
            if (!(route instanceof Route)) {
                throw new Error('Invalid type Error');
            }

            routes.push(route);
        }
    }
}