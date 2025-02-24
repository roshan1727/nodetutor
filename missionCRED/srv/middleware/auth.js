module.exports.authwww=()=>{
    return async function (req, res, next) {
        const authheader = req.headers.authorization;
        console.log(req.headers);
    
        if (!authheader) {
            let err = new Error('You are not authenticated!');
            res.setHeader('WWW-Authenticate', 'Basic');
            err.status = 401;
            return next(err)
        }
    
        const auth = new Buffer.from(authheader.split(' ')[1],
            'base64').toString().split(':');
        const user = auth[0];
        const pass = auth[1];
    
        if (user == 'admin' && pass == 'admin') {
            next();
        } else {
            let err = new Error('You are not authenticated!');
            res.setHeader('WWW-Authenticate', 'Basic');
            err.status = 401;
            return next(err);
        }
    
    }
}