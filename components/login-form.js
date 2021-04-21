import { useState } from 'react'

export default function LoginForm({ onSubmit }) {

    const initialValues = {
        username: '',
        password: '',
    }

    const [values, setValues] = useState(initialValues);

    function submitHandler(event) {
        event.preventDefault();
        onSubmit(values);
        setValues(initialValues)
    }

    function inputChangeHandler(event) {

        let { name, value } = event.target;

        setValues({ ...values, [name]: value });
    }

    return (

        <div className="w-auto h-auto bg-gray-50">
        <form onSubmit={submitHandler} className="w-10/12 p-4 m-auto my-4 bg-green-200 border-4 border-gray-500 rounded h-80">
            <div >
                <div>
                <label htmlFor="username" className="mb-4 text-2xl italic font-bold text-center ">USRE NAME</label>
                </div>

                <div>
                <input type="text" name="username" id="username" value={values.username} onChange={inputChangeHandler} placeholder="User Name" className="flex-1 text-black" />
                </div>
            </div>

            <div>
                <div>
                <label htmlFor="password" className="mb-4 text-2xl italic font-bold text-center">PASSWORD</label>
                </div>
                <div>
                <input type="password" name="password" id="password" value={values.password} onChange={inputChangeHandler} placeholder="password" />
                </div>
            </div>
            <div>
            <button type="submit" className="p-2.5 my-2 uppercase bg-green-500 rounded-md">Sign In</button>
            </div>
        </form>
        </div>
    );
}



// import { useState } from 'react'


// export default function LoginForm({ onSubmit }){

//     const initialValues = {
//         username: '',
//         password: '',
//     }

//     const [values, setValues] = useState(initialValues);

//     function submitHandler(event) {
//         event.preventDefault();
//         onSubmit(values);
//         setValues(initialValues)
//     }

//     function inputChangeHandler(event) {

//         let { name, value } = event.target;

//         setValues({ ...values, [name]: value });
//     }

//     return (

//         <form onSubmit={submitHandler}>
//             <div>
//                 <label htmlFor="username">User Name</label>
//                 <input type="text" name="username" id="username" value={values.username} onChange={inputChangeHandler} placeholder="User Name" />
//             </div>

//             <div>
//                 <label htmlFor="password">Password</label>
//                 <input type="password" name="password" id="password" value={values.password} onChange={inputChangeHandler} placeholder="password" />
//             </div>

//             <button type="submit">Sign In</button>

//         </form>
//     );
// }