
import './App.css'
import Card from './component/Card'
import Button from './component/button'



function App() {
  return (
    <>
      <div className='text'>
        
    <Button type="delete" className="delete"/> 
    <Button type="upload" className="upload"/> 
    <Button type="cancel" className="cancel"/> 
    <Button type="submit" className="submit"/> 
    <Button type="icon" className="icon"/> 
    <Button type="download" className="download"/> 
    <Button type="search" className="search"/> 
    <Card />
    
    </div>
    </>
  )
}

export default App
