import Contact from "../components/Contact";

function Favourite({ contacts, toggleFav, deleteContact }) {
    const favContacts = contacts.filter((contact)=>contact.fav)
    return (
        <>
            <div className="row row-cols-1 row-cols-sm-2 row-cols-md-2 g-5 mt-2 px-3">
                {
                    contacts.map((singleContact) => {
                        return singleContact.fav && (<Contact key={singleContact._id} contact={singleContact} toggleFav={toggleFav} deleteContact={deleteContact}/>)
                    })
                }
            </div>
            <div className="mt-3 px-2">
                {favContacts.length === 0 && (<h1> No Favourites</h1>)}
            </div>
        </>

    )
}

export default Favourite
