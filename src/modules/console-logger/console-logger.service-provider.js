import IoC from "../framework/ioc";
import { Logger } from "../framework/logger";
import { ServiceProvider } from "../framework/service-provider";
import { ConsoleLogger } from "./console-logger";

class ConsoleLoggerServiceProvider
    extends ServiceProvider {
        /**
         * @param {IoC} ioc 
         */
        register(ioc) {
            ioc.singleton(
                Logger,
                () => new ConsoleLogger(ioc)
            );
        }
}

export const consoleLoggerServiceProvider
    = new ConsoleLoggerServiceProvider();