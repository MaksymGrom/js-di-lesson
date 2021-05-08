import appConfig from '../../configs/app';
import { ConsoleLogger } from '../console-logger/console-logger';
import { Router } from '../routing/router';
import IoC from './ioc';
import { Logger } from './logger';
import { ServiceProvider } from './service-provider';

export class App {
    /**
     * @returns {IoC}
     */
    run() {
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

        /** @type {Router} */
        const router = ioc.use(Router);
        router.init();

        /** @type {Logger} */
        const logger = ioc.use(Logger);

        logger.info('App successfully runned');

        return ioc;
    }
}