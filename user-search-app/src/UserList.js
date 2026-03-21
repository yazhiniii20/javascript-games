function UserList({search}){
    const users = [
        {id:1, name:'John Doe'},
        {id:2, name:'Jane Smith'},
        {id:3, name:'Alice Johnson'},
        {id:4, name:'Bob Brown'},
        {id:5, name:'Charlie Davis'},
    ];
    const filteredusers = users.filter(user => user.name.toLowerCase().includes(search.toLowerCase()));
    if(filteredusers.length !== 0){
    return(
        <div>
            
            <h3> Users :</h3>
            <ul>
                {filteredusers.map(user => (<p key = {user.id}>{user.name}</p>))}
            </ul>
        </div>
    );
}else{
    return(
        <div>
            <h3> No Users Found </h3>
        </div>
    )
}
}
export default UserList;