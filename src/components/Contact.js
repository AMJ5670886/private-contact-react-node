
function Contact({ contact: { name, email, phno, fav, _id }, toggleFav, deleteContact }) {
    return (
        <div className="col col-md-3">
            <div className="card">
                <div className="card-header">
                    <div className="row">
                        <div className="col-6">{name}</div>
                        <div className="col-2 offset-4" onClick={() => toggleFav(_id)}>
                            <i className={fav ? "fa-solid text-warning fa-star"
                                : "fa-regular text-warning fa-star"}>
                            </i>
                        </div>
                    </div>
                </div>
                <ul className="list-group list-group-flush">
                    <li className="list-group-item">{email}</li>
                    <li className="list-group-item">{phno}</li>
                    <li className="list-group-item">
                        <input type="submit" onClick={()=>deleteContact(_id)} className="btn border-danger text-danger" value="Delete" />
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default Contact
