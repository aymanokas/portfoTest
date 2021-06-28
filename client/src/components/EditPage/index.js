import { useEffect, useState } from 'react'
import { createUseStyles } from 'react-jss'
import style from './style'
import fetch from 'node-fetch'
import { push } from 'connected-react-router'
import { useDispatch } from 'react-redux'
import { useParams } from 'react-router'
import { FormControl, InputLabel, MenuItem, Select, useMediaQuery } from '@material-ui/core'

const useStyles = createUseStyles(style)

const EditPage = () => {
  const matches = useMediaQuery('(min-width:1100px)')
  const [name, setName] = useState('')
  const [image, setImage] = useState('')
  const [download, setDownload] = useState('')
  const [description, setDescription] = useState('')
  const [categorie, setCategorie] = useState('')
  const dispatch = useDispatch()
  const { slug } = useParams()
  const edit = (data, slug) => {
    fetch('/api/projects/editproject', {
      method: 'POST',
      body: JSON.stringify({ data: data, id: slug }),
      headers: { 'Content-Type': 'application/json' }
    })
      .then(res => res.json())
      .then(json => {
        console.warn(json)
      })
  }
  const remove = (slug) => {
    fetch('/api/projects/deleteproject', {
      method: 'POST',
      body: JSON.stringify({ id: slug }),
      headers: { 'Content-Type': 'application/json' }
    })
      .then(res => res.json())
      .then(json => {
        console.warn(json)
      })
  }
  useEffect(() => {
    fetch('/api/projects/getProjectById', {
      method: 'POST',
      body: JSON.stringify({ id: slug }),
      headers: { 'Content-Type': 'application/json' }
    })
      .then(res => res.json())
      .then(json => {
        setName(json.project.title)
        setImage(json.project.thumbnail)
        setDownload(json.project.downloadLink)
        setDescription(json.project.description)
        setCategorie(json.project.categoryId)
      })
  }, [slug])
  const { inputClass, titleClass, inputAreaClass, buttonClass2, dropDownClass, container, smallTitleClass, buttonClass, form, imageContainerStyle, buttonClass3, imageStyle } = useStyles()
  return (
    <div className={container}>
      <div className={form}>
        <p className={titleClass}>Edit This item</p>
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
        <FormControl variant='outlined' className={dropDownClass}>
          <InputLabel>Category</InputLabel>
          <Select
            value={categorie}
            onChange={(e) => setCategorie(e.target.value)}
          >
            <MenuItem value={1}>Projects</MenuItem>
            <MenuItem value={2}>PNG Cutout</MenuItem>
            <MenuItem value={3}>CAD</MenuItem>
            <MenuItem value={4}>Learning</MenuItem>
          </Select>
        </FormControl>
        <p className={smallTitleClass}>Description</p>
        <textarea
          className={inputAreaClass}
          placeholder='Fill with your item Description'
          value={description}
          type='text'
          onChange={e => setDescription(e.target.value)}
        />
        <button onClick={() => edit({ title: name, thumbnail: image, description: description, downloadLink: download, categoryId: categorie }, slug)} className={buttonClass}>Edit Item</button>
        <button
          onClick={() => {
            remove(slug)
            dispatch(push('/'))
          }}
          className={buttonClass3}
        >
          Delete Item
        </button>
        <button onClick={() => dispatch(push('/'))} className={buttonClass2}>Go to home</button>
      </div>
      {matches &&
        <div className={imageContainerStyle}>
          <img alt='' src={image} className={imageStyle} />
        </div>}
    </div>
  )
}

export default EditPage
