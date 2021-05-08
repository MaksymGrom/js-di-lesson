import { consoleLoggerServiceProvider } from "../modules/console-logger/console-logger.service-provider";
import exampleServiceProvider from "../modules/example/example.service-provider";
import { ServiceProvider } from "../modules/framework/service-provider";
import { routingServiceProvider } from "../modules/routing/routing.service-provider";

/**
 * @typedef AppConfig
 * @type {Object}
 * @property {Array.<ServiceProvider>} providers
 */

/** @type {AppConfig} */
const appConfig = {
    providers: [
        exampleServiceProvider,
        consoleLoggerServiceProvider,
        routingServiceProvider,
    ],
    foo: 'FOO'
};

export default appConfig;