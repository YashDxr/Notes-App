import { GoogleAuthProvider, getAuth, signInWithPopup} from "firebase/auth";

export async function oAuthWithGoogle() {
    try{
        const provider = new GoogleAuthProvider();                         //Provider: GOOGLE
        const auth = getAuth();                                            //Task:Authentication
        const userCredintials = await signInWithPopup(auth,provider);      //Function takes task and provider of that task
        const user = userCredintials.user;
    
        console.log("user: ",user);
        return user;
    }catch(err){
        throw err;
    }
}

