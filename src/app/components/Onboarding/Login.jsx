export default function Login() {
    return (
        <div className="grid grid-cols-2 bg-primary text-white lg:px-36 min-h-screen items-center">
            {/* Illustration */}
            <div>
                <div className="h-[600px] w-[500px] bg-white"></div>
            </div>

            {/* Get started */}
            <div className="w-[35rem] mx-auto">
                <div>
                    <h3 className="text-4xl">Login</h3>
                    <p className="opacity-60 mt-2">Create an account to start your journey</p>
                </div>

                <form action="" className="mt-8">
                    <div className="mt-6">
                        <label htmlFor="email" className="text-sm">Email</label> <br />
                        <input type="email" placeholder="Email" id="email" className="rounded-xl px-4 py-2 bg-input mt-1 w-full outline-none border border-white border-opacity-25" />
                    </div>
                    
                    <div className="mt-6">
                        <label htmlFor="password" className="text-sm">Password</label> <br />
                        <input type="text" placeholder="First name" id="password" className="rounded-xl px-4 py-2 bg-input mt-1 w-full outline-none border border-white border-opacity-25" />
                    </div>

                    <div className="mt-10">
                        <div className="w-ful">
                            <button className= "bg-button-primary rounded-3xl w-full py-3">Log In</button>
                        </div>
                        <div className="w-full mt-4">
                            <button className= "rounded-3xl w-full py-3 border border-white border-opacity-25">Forget Password</button>
                        </div>


                        <span className="text-center block opacity-25 mt-12">Don&apos;t have an account? <span className="text-[#6E5BFF] opacity-100">Sign Up</span></span>                 
                        
                    </div> 
                </form>
            </div>
        </div>
    )
}