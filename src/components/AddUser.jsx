const AddUser = () => {
    return (
        <>
            <div className="mx-5">
                <h4 className="mt-4 mb-3">Add User</h4>
                <form>
                <div className="mb-3">
                    <label className="form-label">Name</label>
                    <input type="text" className="form-control" placeholder="Example input placeholder" />
                </div>
                <div className="mb-3">
                    <label className="form-label">Age</label>
                    <input type="text" className="form-control" placeholder="Another input placeholder" />
                </div>
                <div>
                    <label className="form-label">Gender</label>
                    <select className="form-select" aria-label="Default select example" placeholder="Select Gender Here">
                        <option value="1">Select here</option>
                        <option value="2">Male</option>
                        <option value="3">Female</option>
                    </select>
                </div>
                <button className="btn btn-dark mt-3"> ADD</button>
                </form>
            </div>
        </>
    )
}

export default AddUser
