import appConfig from "./configs/app";
import IoC from "./ioc";
import { APP_CONFIG_TOKEN, APP_TITLE_TOKEN, ROUTERS_TOKEN } from "./modules/example/contracts";
import { ExampleService } from "./modules/example/example.service";
import { ServiceProvider } from "./service-provider";

const ioc = new IoC();

for (let serviceProvider of appConfig.providers) {
    if (!(serviceProvider instanceof ServiceProvider)) {
        console.error(
            'Incorrect type of service provider',
            serviceProvider
        );
        throw new Error('Incorrect type of service provider');
    }
    
    serviceProvider.register(ioc);
}

const appTitle = ioc.use(APP_TITLE_TOKEN);

console.log(appTitle);

const config = ioc.use(APP_CONFIG_TOKEN);

console.log(config);

/** @type {ExampleService} */
const exampleService = ioc.use(ExampleService);
exampleService.run();
console.log('exampleService', exampleService);

const routers = ioc.use(ROUTERS_TOKEN);

console.log(routers);

for(let router of routers) {
    console.log(`path: ${router.path} && title: ${router.title}`)
}
