import { useState } from 'react'

const modelUser = {
  name: "",
  divisi: "",
}

function App() {
  const [user, setUser] = useState(modelUser)

  const handleChangeUser = (e) => {
    const name = e.target.name
    const value = e.target.value

    setUser({...user, [name]: value})
  }

  return (
    <div>
      <h1>Halo {user.name}</h1>
      <h1>Divisi {user.divisi}</h1>
      <input type="text" name="name" onChange={handleChangeUser} />
      <input type="text" name="divisi" onChange={handleChangeUser}/>
    </div>
  )
}

export default App
