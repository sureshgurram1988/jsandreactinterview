import { useState } from "react";

const App = () => {
  const[list, setList] = useState([])
  const [data, setData] = useState({
      username:"",
      email: "",
      password: "",
      confirmpassword: ""
  })
  const {username, email, password, confirmpassword} = data;
  const changeHandler = e => {
    setData({...data, [e.target.name]: e.target.value});
  }
  const submitHandler = e=> {
    e.preventDefault();
    if(username == "" || email == ""){
      alert("please fill the input filed")
    }
   
    else{
      console.log(data);
        if(data){
          setList((listItem) => [...listItem, data] )
        }
      e.target.reset();
    }
  }
  return (
    <div>
        <center>
            <form className='col-md-4' onSubmit={submitHandler}>
              <input className='form-control mb-3' type="text" name="username"   onChange={changeHandler} />
              <input className='form-control mb-3' type="email"  name="email" onChange={changeHandler} />
             <button type='submit' className='btn btn-primary'>Submit</button>
            </form>
           {
            list.map(items =>
                <div>
                  <li>{items.username}</li>
                  <li>{items.email}</li>
                </div>
              )
           }
        </center>
		
    </div>
  )
}

export default App
