import pkg from 'jsonwebtoken'

export default async function Auth(req,res,next) {
    try{
        const key = req.headers.authorization;
        console.log(key);
        if(!key)
         return res.status(403).send({ msg: "Aunauthorized acess"});

        const token = key.split(" ")[1];
        console.log(token);
        
        const auth = await verify(token,process.env.JWT_KEY);
        req.user=auth;
        next();
        
    }
    catch{
        return res.status(403).send({ msg: "Session expired" });
    }
}