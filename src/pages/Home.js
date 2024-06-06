import Form from "../components/Form";
import Contact from "../components/Contact";

function Home({formData,contacts,toggleFav,deleteContact}) {
    return (
        <>
        <Form formData={formData}/>
        <div className="row row-cols-1 row-cols-sm-2 row-cols-md-2 g-5 mt-2 px-3">
            {
                contacts.map((singleContact)=>{
                    return <Contact key={singleContact._id} contact={singleContact} toggleFav={toggleFav} deleteContact={deleteContact} />
                })
            }
        </div>
        <div className="mt-3 px-2">
            {contacts.length === 0 && (<h2>No Contacts Found</h2>)}
        </div>
        </>
    )
}

export default Home
