import { useEffect, useState } from 'react';

const Cards = () => {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => response.json())
            .then(data => setUsers(data))
            .catch(error => console.error(error));
    }, []);

    return (
        <div>
            {users.map(user => (
                <div key={user.id} role='userCard'>
                    <h2>{user.name}</h2>
                    <p>{user.email}</p>
                    <p>{user.phone}</p>
                    <hr />
                </div>
            ))}
        </div>
    );
};

export default Cards;
