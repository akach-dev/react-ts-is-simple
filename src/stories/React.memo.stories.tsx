import {memo, useMemo, useState} from "react";

export default {
  title: 'React.memo'
}

type UsersPropsType = {
  users: string[]
}

const Users = memo(({users}: UsersPropsType) => {
  console.log('Users')
  return <div>
    {
      users.map((user, index) => <div key={index}> {user}  </div>)
    }
  </div>
})

export const HelpsToReactMemo = () => {
  console.log('HelpsToReactMemo')
  const [counter, setCounter] = useState(0)
  const [users, setUsers] = useState(['Alex', 'Oksana', 'Max'])

  const increment = () => setCounter(counter + 1)


  const filterUsers = useMemo(() => users.filter(user => user.toLowerCase().includes('m')), [users])


  return <div>
    <button onClick={increment}>+ {counter}</button>
    <Users users={filterUsers}/>
  </div>

}

