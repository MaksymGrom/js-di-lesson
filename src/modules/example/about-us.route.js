import { Route } from "../routing/route";

export class AboutUsRoute extends Route {
    isMatch(hash) {
        return hash === '#about-us';
    }

    sortOrder() {
        return 10;
    }

    render() {
        console.log('About Us Route Works!');
    }
}