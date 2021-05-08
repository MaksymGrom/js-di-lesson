export class Route {
    /**
     * @param {String} hash 
     * @returns {Boolean}
     */
    isMatch(hash) {
        return false;
    }

    /**
     * @returns {Number}
     */
    sortOrder() {
        return 0;
    }

    /**
     * @returns {void}
     */
    render() {
        console.log('Route.render()');
    }
}