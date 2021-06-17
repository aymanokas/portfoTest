import { underConstruction } from '../../assets'

const UnderConstruction = () => {
  // const [access, setAccess] = useState(false)
  return (
    <div style={{display: 'flex', alignItems:'center', justifyContent:'center', height: '100vh'}}>
      <img src={underConstruction} alt='underconstruction' />
    </div>
  )
}

export default UnderConstruction