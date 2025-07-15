export function profileMiddleWare(req, res, next) {
    console.log("This is middleware");
    next();
}