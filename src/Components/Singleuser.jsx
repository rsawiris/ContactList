import { useParams, Link } from "react-router-dom"

const SingleUser = ({users}) => {
    const params = useParams()
    const id = params.id * 1

    const user = users.find((user) => {
        return user.id === id
    })

    if(!user) {
        return null
    }

    return (
        <div>
            <h1>{user.name}</h1>
            <ul>
                <li>E-mail: {user.email}</li>
                <li>Phone: {user.phone}</li>
            </ul>
            <Link to='/users'>
                Back to all Users
            </Link>
        </div>
    )
}

export default SingleUser