import axios from 'axios'

function App() {

  const handleSubmit = async (e) => {
  
    const file = e.target.files[0]
    const formData = new FormData()
    formData.append('csv', file)
    try {
      const config = {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      }
      await axios.post('http://127.0.0.1:8000/api/uploads', formData, config)
      console.log('Success')
    } catch (error) {
      console.error(error)
    }
  }
  return (
    <div >
      <input type="file" onChange={handleSubmit} name="csv"/>
    </div>
  );
}

export default App;
