
import './App.css'
import { Client } from 'appwrite'; 

function App() {
console.log(import.meta.env.VITE_APPWRITE_URL)
const client = new Client();

client
    .setEndpoint('https://cloud.appwrite.io/v1')
    .setProject('65e5c4c6b5cfc4dda432');

  return (
    <>
   
   <div>Hello React</div>
    </>
  )
}

export default App
