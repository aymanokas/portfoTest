import { useState } from 'react'
import { createUseStyles } from 'react-jss'
import style from './style'
import fetch from 'node-fetch'
import { push } from 'connected-react-router'
import { useDispatch } from 'react-redux'

const useStyles = createUseStyles(style)

const Admin = () => {
  const [name, setName] = useState('')
  const [image, setImage] = useState('')
  const [download, setDownload] = useState('')
  const [description, setDescription] = useState('')
  const dispatch = useDispatch()
  const upload = (data) => {
    fetch('/api/projects/addproject', {
      method: 'POST',
      body: JSON.stringify(data),
      headers: { 'Content-Type': 'application/json' }
    })
      .then(res => res.json())
      .then(json => {
        console.warn(json)
      })
  }
  const { inputClass, titleClass, inputAreaClass, buttonClass2, container, smallTitleClass, buttonClass, form, imageContainerStyle, imageStyle } = useStyles()
  return (
    <div className={container}>
      <div className={form}>
        <p className={titleClass}>Add an Item to Main page</p>
        <p className={smallTitleClass}>Name of the item</p>
        <input
          className={inputClass}
          placeholder='Fill with your Item name'
          value={name}
          type='text'
          onChange={e => setName(e.target.value)}
        />
        <p className={smallTitleClass}>Image Link</p>
        <input
          className={inputClass}
          placeholder='Make sure The link is a valid link of a hosted image'
          value={image}
          type='text'
          onChange={e => setImage(e.target.value)}
        />
        <p className={smallTitleClass}>Download Link</p>
        <input
          className={inputClass}
          placeholder='Fill with your item download link'
          value={download}
          type='text'
          onChange={e => setDownload(e.target.value)}
        />
        <p className={smallTitleClass}>Description</p>
        <textarea
          className={inputAreaClass}
          placeholder='Fill with your item Description'
          value={description}
          type='text'
          onChange={e => setDescription(e.target.value)}
        />
        <button onClick={() => upload({ title: name, thumbnail: image, description: description, downloadLink: download })} className={buttonClass}>Add Item</button>
        <button onClick={() => dispatch(push('/'))} className={buttonClass2}>Go to home</button>
      </div>
      <div className={imageContainerStyle}>
        <img  alt='' src={image} className={imageStyle} />
      </div>
    </div>
  )
}

export default Admin