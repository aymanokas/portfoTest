import { useEffect, useState } from 'react'
import Header from '../../components/Header'
import TabBar from '../../components/TabBar'
import ImageGalerie from '../../components/ImageGalerie'

const HomePage = () => {
  const [data, setData] = useState([])
  const [searchedData, setSearchedData] = useState(data)
  useEffect(() => {
    window.fetch('/api/projects/getProjects')
      .then(response => response.json())
      .then(data => {
        setSearchedData([...data.projects])
        setData([...data.projects])
      })
  }, [])
  console.warn(data)
  return (
    <>
      <Header data={data} searchedData={searchedData} setSearchedData={setSearchedData} />
      <TabBar />
      <ImageGalerie data={searchedData} />
    </>
  )
}

export default HomePage
