import IoC from '../framework/ioc';
import {ServiceProvider} from '../framework/service-provider';
import { NotFoundRoute } from './not-found.route';
import { RouteCollection } from './route-collection';
import { Router } from './router';
class RoutingServiceProvider
    extends ServiceProvider {
        /**
         * @param {IoC} ioc 
         */
        register(ioc) {
            ioc.singleton(
                Router,
                () => new Router(ioc)
            );

            ioc.singleton(
                RouteCollection,
                () => new RouteCollection(ioc)
            );

            ioc.resolving(
                RouteCollection,
                ctx => {
                    /** @type {RouteCollection} */
                    const routeCollection = ctx.instance;
                    routeCollection.addRoute(
                        new NotFoundRoute()
                    );
                    return routeCollection;
                }
            );
        }
    }

export const routingServiceProvider
        = new RoutingServiceProvider();