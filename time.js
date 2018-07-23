export function time(time = +new Date()) {
    var date = new Date(time + 8 * 3600 * 1000);
    return date.toJSON().substr(0, 16).replace('T', ' ').replace(/-/g, '.');
}
