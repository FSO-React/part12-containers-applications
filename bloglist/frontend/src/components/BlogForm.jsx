import { useDispatch } from 'react-redux'
import { createBlog } from '../reducers/blogsReducer'
import {
  Button,
  Form,
  Card,
} from 'react-bootstrap'
import { useState } from 'react'

const BlogForm = () => {
  const dispatch = useDispatch()
  const [validated, setValidated] = useState(true)
  const [title, setTitle] = useState('')
  const [author, setAuthor] = useState('')
  const [url, setUrl] = useState('')

  const addBlog = (event) => {
    event.preventDefault()
    console.log('reachs here')
    const blogObject = { title, author, url }
    dispatch(createBlog(blogObject))
    setTitle('')
    setAuthor('')
    setUrl('')
  }

  return (
    <Form noValidate onSubmit={addBlog} validated={validated}>
      <Form.Group className="mb-3">
        <Form.Label>Title</Form.Label>
        <Form.Control
          id='title-input'
          required
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Title" />
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label>Url</Form.Label>
        <Form.Control
          id='url-input'
          required
          type="url"
          value={url}
          onChange={(e) => setUrl(e.target.value)}
          placeholder="Url" />
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label>Author</Form.Label>
        <Form.Control
          id='author-input'
          required
          type="text"
          value={author}
          onChange={(e) => setAuthor(e.target.value)}
          placeholder="Author" />
      </Form.Group>
      <div className="d-flex justify-content-end">
        <Button id='save-button' variant="primary" type="submit">
          Add
        </Button>
      </div>
    </Form>
  )
}

export default BlogForm