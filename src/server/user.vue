<script>
     import methodsFunc from'./../config/Baserequest';
     import comUrl from './../config/comUrl';

    const AuthServices = {
        Login: async(params)=>{
			await methodsFunc.Post(comUrl.login,{"user":params.user,"pass":params.pass}).then((result)=>{
				console.log(result)
			     return result;
				// resolve(result)
			}).catch((error)=>{
				// reject(error);
			})
        }
    }
    export default AuthServices;

</script>