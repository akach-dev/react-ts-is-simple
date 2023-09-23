import {FC, memo, useCallback, useMemo, useState} from "react";

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

export const HelpsToReactMemoWithUseMemo = () => {
  console.log('HelpsToReactMemo')
  const [counter, setCounter] = useState(0)
  const [users, setUsers] = useState(['Alex', 'Oksana', 'Max'])

  const increment = () => setCounter(counter + 1)

  const addUser = () => {
    setUsers([...users, 'Misha' + new Date().getTime()])
  }

  // const filterUsers = useMemo(() => users.filter(user => user.toLowerCase().includes('m')), [users])
  const filterUsers = users.filter(user => user.toLowerCase().includes('m'))


  return <div>
    <button onClick={increment}>+ {counter}</button>
    <button onClick={addUser}>Add User</button>

    <Users users={useMemo(() => filterUsers, [users])}/>
  </div>

}
export const LikeUseCallback: FC = () => {
  console.log('LikeUseCallback')
  const [counter, setCounter] = useState(0)
  const [books, setBooks] = useState(['React ', 'JS'])

  const increment = () => setCounter(counter + 1)

  const addBook = () => {
    console.log(books)
    setBooks([...books, 'StoryBook' + new Date().getTime()])
  }

  // const filterUsers = useMemo(() => users.filter(user => user.toLowerCase().includes('m')), [users])
  const filterBooks = books.filter(book => book.toLowerCase().includes('r'))

  return <div>
    <button onClick={increment}>+ {counter}</button>
    <Books
       addBook={useCallback(addBook, [books])}
       books={useMemo(() => filterBooks, [books])}/>
  </div>
}

type BooksPropsType = {
  books: string[]
  addBook: () => void
}

const Books: FC<BooksPropsType> = memo(({books, addBook}) => {
  console.log('Books')
  return <div>
    <button onClick={addBook}>Add book</button>

    {
      books.map((book, index) => <div key={index}> {book}  </div>)
    }
  </div>
})

