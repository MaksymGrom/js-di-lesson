import { Logger } from "../framework/logger";

export class ConsoleLogger extends Logger {
    debug(...messages) {
        console.log(...messages);
    }

    info(...messages) {
        console.log(...messages);
    }

    error(...messages) {
        console.error(...messages);
    }
}