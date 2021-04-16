import { useState } from 'react'

export default function CookieStandForm({ onCreate }) {

    const initialValues = {
        location: '',
        max: 0,
        min: 0,
        avg: 0,
    };

    const [values, setValues] = useState(initialValues);

    function submitHandler(event) {
        event.preventDefault();
        onCreate(values);
        setValues(initialValues)
    }

    function inputChangeHandler(event) {
        let { name, value, type } = event.target;

        if (type === "number") {
            value = parseFloat(value);
        }

        setValues({ ...values, [name]: value });
    }
    return (
        <form onSubmit={submitHandler}>
            <div className="">

            <div className="">
                <div className="text-xs font-extrabold text-center">
                <label htmlFor="location">ADD LOCATION</label>
                </div>
                <div className="text-center">
                <input type="text" name="location" id="location" value={values.location} onChange={inputChangeHandler} placeholder="Cookie Stand Location" />
                </div>
            </div>
          
            <button className="rounded bg-green-700 text-right py-1.5" type="submit">Create Stand</button>
            

            </div>

            <div className="flex-row">
                <div>
            <FormInputSection>
                <label htmlFor="min">Minimum Customers per Hour</label>
                <input type="number" name="min" id="min" value={values.min} onChange={inputChangeHandler} />
            </FormInputSection>
                </div>
                <div>
            <FormInputSection>
                <label htmlFor="max">Maximum Customers per Hour</label>
                <input type="number" name="max" id="max" value={values.max} onChange={inputChangeHandler} />
            </FormInputSection>
                </div>
                <div>
            <FormInputSection>
                <label htmlFor="avg">Average Cookies per Sale</label>
                <input type="number" name="avg" id="avg" value={values.avg} onChange={inputChangeHandler} />
            </FormInputSection>
                </div>
            </div>
        </form>
    );
}

function FormInputSection({ children }) {
    return (
        <div>
            {children}
        </div>
    );
}
