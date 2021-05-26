import { createUseStyles } from 'react-jss'
import style from './style'
import { Typography, useMediaQuery } from '@material-ui/core'

const useStyles = createUseStyles(style)

const ImageGalerie = ({ data }) => {
  const matches = useMediaQuery('(min-width:1100px)')
  const { titleSection, title, cardDes, cardTitle, cardContainer, picsContainer, picsBigRow, picsRow, image, placeholder } = useStyles(matches)

  const chunkArray = (arr, n) => {
    const chunkLength = Math.max(arr.length / n, 1)
    const chunks = []
    for (let i = 0; i < n; i++) {
      chunks.push(arr.slice(chunkLength * i, chunkLength * (i + 1)))
    }
    return chunks
  }
  const newdata = chunkArray(data, 4)
  console.warn(newdata)
  return (
    <>
      <div className={titleSection}>
        <Typography variant='h4' className={title}>
          Free Stock Photos
        </Typography>
      </div>
      <div className={picsContainer}>
        <div className={picsBigRow}>
          <div className={picsRow}>
            {newdata[3].map((d, k) => {
              return (
                <div key={k} className={cardContainer} onClick={() => window.open(d.downloadLink, '_blank')}>
                  {d.thumbnail
                    ? (
                      <img alt='' src={d.thumbnail} className={image} />)
                    : (
                      <div className={placeholder} />)}
                  <Typography variant='h4' className={cardTitle}>
                    {d.title}
                  </Typography>
                  <Typography variant='h4' className={cardDes}>
                    {d.description}
                  </Typography>
                </div>
              )
            })}
          </div>
          <div className={picsRow}>
            {newdata[2].map((d, k) => {
              return (
                <div key={k} className={cardContainer} onClick={() => window.open(d.downloadLink, '_blank')}>
                  {d.thumbnail
                    ? (
                      <img  alt='' src={d.thumbnail} className={image} />)
                    : (
                      <div className={placeholder} />)}
                  <Typography variant='h4' className={cardTitle}>
                    {d.title}
                  </Typography>
                  <Typography variant='h4' className={cardDes}>
                    {d.description}
                  </Typography>
                </div>
              )
            })}
          </div>
        </div>
        <div className={picsBigRow}>
          <div className={picsRow}>
            {newdata[1].map((d, k) => {
              return (
                <div key={k} className={cardContainer} onClick={() => window.open(d.downloadLink, '_blank')}>
                  {d.thumbnail
                    ? (
                      <img  alt='' src={d.thumbnail} className={image} />)
                    : (
                      <div className={placeholder} />)}
                  <Typography variant='h4' className={cardTitle}>
                    {d.title}
                  </Typography>
                  <Typography variant='h4' className={cardDes}>
                    {d.description}
                  </Typography>
                </div>
              )
            })}
          </div>
          <div className={picsRow}>
            {newdata[0].map((d, k) => {
              return (
                <div key={k} className={cardContainer} onClick={() => window.open(d.downloadLink, '_blank')}>
                  {d.thumbnail
                    ? (
                      <img alt='' src={d.thumbnail} className={image} />)
                    : (
                      <div className={placeholder} />)}
                  <Typography variant='h4' className={cardTitle}>
                    {d.title}
                  </Typography>
                  <Typography variant='h4' className={cardDes}>
                    {d.description}
                  </Typography>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </>
  )
}

export default ImageGalerie