

const UserTest = ({ user, primary }) => {

    
    return (
        <div className="">
            {user && primary && <h1>Welcome {user}!</h1>}
            {!user && primary && <h1>Welcome!</h1>}
            {!user && !primary && <h2>Welcome!</h2>}
            {user && !primary && <h2>Welcome {user}!</h2>}
        </div>
    );
}

export default UserTest;