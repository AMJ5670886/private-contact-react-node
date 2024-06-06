import { useForm } from 'react-hook-form';

function Form({formData}) {
    const {
        register,
        handleSubmit,
        formState: { errors },
        reset
    } = useForm();

    const onSubmit = (data) => {
        data._id = Date.now();
        data.fav = false;
        formData(data);
        reset();
    }
    return (
        <div>
            <div className="col col-sm-4  shadow rounded mx-auto mt-5 pb-2 ">
                <form className="mx-5 mb-3" onSubmit={handleSubmit(onSubmit)}>
                    <h2 className="text-center pt-3">Add Contact</h2>
                    <div className="col col-6 mx-5">
                        <label className="form-label mt-3">Name</label>
                        <input type="text" className="form-control" {...register("name", {
                            required: 'Name is required'
                        })}
                        />
                        {errors.name && (
                            <small className='text-danger'>{errors.name.message}</small>
                        )}
                    </div>
                    <div className="col col-6 mx-5">
                        <label className="form-label">Email</label>
                        <input type="text" className="form-control" {...register("email", {
                            required: 'Email is required',
                            pattern: {
                                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                                message: 'Enter valid email'
                            }
                        })} />
                        {errors.email && (
                            <small className='text-danger'>{errors.email.message}</small>
                        )}
                    </div>
                    <div className="col col-6 mx-5 mt-1 mb-2">
                        <label className="form-label">Phone Number</label>
                        <input type="text" className="form-control" {...register("phno", {
                            required: 'Phone number is required',
                            pattern: {
                                value: /^\s*(?:\+?(\d{1,3}))?[-. (]*(\d{3})[-. )]*(\d{3})[-. ]*(\d{4})(?: *x(\d+))?\s*$/,
                                message: 'Enter valid phone number'
                            }
                        })} />
                        {errors.phno && (
                            <small className='text-danger'>{errors.phno.message}</small>
                        )}
                    </div>
                    <div className="col col-6 mx-5">
                        <input type="submit" className="btn btn-primary" value="Submit" />
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Form
