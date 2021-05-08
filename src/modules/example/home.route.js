import { Route } from "../routing/route";

export class HomeRoute extends Route {
    isMatch(hash) {
        return !hash || hash === '#' || hash === '#home';
    }

    sortOrder() {
        return 10;
    }

    render() {
        console.log('Home Route Works!');
    }
}