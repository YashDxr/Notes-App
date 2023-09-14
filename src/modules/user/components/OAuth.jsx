import Button from '@mui/material/Button';
import VpnKeyIcon from '@mui/icons-material/VpnKey';
import { oAuthWithGoogle } from '../repository/oauth';
import { useNavigate } from 'react-router-dom';

export const OAuth = () => {
    const navigate = useNavigate();
    const googleOAuth =  async () => {
        try{
            const user = await oAuthWithGoogle();
            if(user){
                navigate('/dashboard' , {state:{'username':user.displayName}});
                console.log('User Info: ',user);
            }else{
                console.log('Problem in user fetch: From-Else Block');
            }
        }catch(err){
            console.log('Problem in user fetch: From-catch Block',err);
        }
    }
    return (
        <Button onClick={googleOAuth} variant="contained"><VpnKeyIcon/>&nbsp;Login With Google</Button>
    )
}