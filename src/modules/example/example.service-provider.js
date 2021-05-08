import appConfig from "../../configs/app";
import IoC from "../framework/ioc";
import { ServiceProvider } from "../framework/service-provider";
import { RouteCollection } from "../routing/route-collection";
import { AboutUsRoute } from "./about-us.route";
import { APP_CONFIG_TOKEN, APP_TITLE_TOKEN, ROUTERS_TOKEN } from "./contracts";
import { ExampleService } from "./example.service";
import { HomeRoute } from "./home.route";

class ExampleServiceProvider extends ServiceProvider {
    /**
     * @param {IoC} ioc 
     */
    register(ioc) {
        // регистрация строки (имя сайта)
        ioc.singleton(
            APP_TITLE_TOKEN,
            () => 'GromMax App'
        );

        ioc.resolving(
            APP_TITLE_TOKEN,
            ctx => `<h1>${ctx.instance}</h1>`
        );

        // регистрация конфига приложения в IoC
        ioc.singleton(
            APP_CONFIG_TOKEN,
            () => {
                const {providers, ...config} = appConfig;
                
                return config;
            }
        );

        ioc.resolving(
            APP_CONFIG_TOKEN,
            ctx => {
                // mutable approach
                //ctx.instance.title = ctx.ioc.use(APP_TITLE_TOKEN);
                //return ctx.instance;

                return {
                    ...ctx.instance,
                    title: ctx.ioc.use(APP_TITLE_TOKEN)
                };
            }
        );

        // регистрация сервиса, токен === классу

        ioc.singleton(
            ExampleService,
            () => new ExampleService(ioc)
        );

        // регитарция контейнера для однотипных данных
        ioc.singleton(
            ROUTERS_TOKEN,
            () => []
        );

        ioc.resolving(
            ROUTERS_TOKEN,
            ctx => {
                ctx.instance.push({
                    path: '/',
                    title: 'HOME PAGE',
                });

                ctx.instance.push({
                    path: 'about-us',
                    title: 'ABOUT US',
                });
                return ctx.instance;
            }
        );

        ioc.resolving(
            RouteCollection,
            ctx => {
                /** @type {RouteCollection} */
                const routeCollection = ctx.instance;
                routeCollection.addRoute(
                    new HomeRoute()
                );
                routeCollection.addRoute(
                    new AboutUsRoute()
                );
                return routeCollection;
            }
        );
    }
}

export default new ExampleServiceProvider();