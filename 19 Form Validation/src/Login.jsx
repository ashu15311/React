function Login(){
    function submitHandler(e){
        e.preventDefault();
    }
    return(
        <>
        <h1>Login</h1>
        <form onSubmit={submitHandler}>
            <input type="text" placeholder="Enter Name" /> <br />  <br />
            <input type="password" placeholder="Enter Password" /> <br /> <br />
            <button type="submit">SUBMIT</button>
        </form>
        </>
    )
}
export default Login;