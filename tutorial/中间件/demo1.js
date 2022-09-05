const m1 = (req, res, next) => {
    console.log("m1 run");
    next();
}

const m2 = (req, res, next) => {
    console.log("m2 run");
    next();
}

const m3 = (req, res, next) => {
    console.log("m3 run");
    next();
}

const middlewares = [m1, m2, m3];

function useApp(req, res) {
    const next = () => {
        const middleware = middlewares.shift();
        if(middleware){
            middleware(req, res, next);
        }
    }
    next();
}

useApp();
