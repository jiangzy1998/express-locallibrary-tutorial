const m1 = (req, res, next) => {
    console.log("m1 start");
    return next().then(()=>{
        console.log("m1 end");
    })
}

const m2 = (req, res, next) => {
    console.log("m2 start");
    return next().then(()=>{
        console.log("m2 end");
    })
}

const m3 = (req, res, next) => {
    console.log("m3 start");
    return next().then(()=>{
        console.log("m3 end");
    })
}

const middlewares = [m1, m2, m3];

function useApp(req, res) {
    const next = () => {
        const middleware = middlewares.shift();
        if(middleware){
            return Promise.resolve(middleware(req, res, next));
        }else{
            return Promise.resolve("end");
        }
    }
    next();
}

useApp();
