async function getData(userId) {
  let user = await fetch('https://dummyjson.com/users/' + userId).then(res => res.json());
  let { todos } = await fetch(`https://dummyjson.com/users/${userId}/todos`).then(res => res.json());

  const usersContentItem = document.querySelector('.usersContentItem');
  usersContentItem.innerHTML += `<div class="usersContent">
        <h4>${user.firstName} ${user.lastName}</h4> 
        <p><strong>Gender: </strong>${user.gender}</p>
        <p><strong>Email: </strong>${user.email}</p>
        <p><strong>Phone Number: </strong>${user.phone}</p>
        <p><strong>Address: </strong>${user.address.address}</p>
        <p><strong>City: </strong>${user.address.city}</p>
        <p><strong>State: </strong>${user.address.state}</p>
        <p><strong>Country: </strong>${user.address.country}</p>
        <hr>
       <ul id="list" class="list">
          ${todos.map(x => `<li>${x.todo} = ${x.completed ? '✔' : '❌'}</li>`).join('')}
        </ul>
        </div>`;
}

for (let i = 1; i <= 30; i++) {
  getData(i);
}

