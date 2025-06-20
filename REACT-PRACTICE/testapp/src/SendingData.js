import React from 'react'
import { useForm } from 'react-hook-form';

function SendingData() {
    const { handleSubmit, register, formState: { errors } } = useForm({
        defaultValues: {
            first_name: '',
            last_name: 'hari'
        }
    });

    const onSubmit = (data) => {
        console.log(data);
    }
    return (
        <div>
            <form onSubmit={handleSubmit(onSubmit)}>
                <input type="text" placeholder='First Name' name="first_name" {...register('first_name')} />
                <input type="text" placeholder='Last Name' name="last_name" {...register('last_name', { required: true })} />
                {errors.last_name && <span>Last Name is required</span>}
                <button>Submit</button>
            </form>
        </div>
    )
}
export default SendingData;
