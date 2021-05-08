import { Route } from "./route";

export class NotFoundRoute extends Route {
    isMatch(hash) {
        return true;
    }

    sortOrder() {
        return 999999;
    }

    render() {
        console.log('Not Found Route Works!');
    }
}