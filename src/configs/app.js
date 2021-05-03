import exampleServiceProvider from "../modules/example/example.service-provider";
import { ServiceProvider } from "../service-provider";

/**
 * @typedef AppConfig
 * @type {Object}
 * @property {Array.<ServiceProvider>} providers
 */

/** @type {AppConfig} */
const appConfig = {
    providers: [
        exampleServiceProvider
    ],
    foo: 'FOO'
};

export default appConfig;