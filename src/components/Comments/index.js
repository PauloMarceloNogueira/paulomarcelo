import React from "react"
import ReactDisqusComments from "react-disqus-comments"
import { CommentsWrappper, CommentsTitle } from "./styles"
// import { Container } from './styles';

export default function Comments({ url, title }) {
  const completeUrl = `https://paulomarcelodev.netlify/${url}`

  return (
    <CommentsWrappper>
      <CommentsTitle>Comentários</CommentsTitle>
      <ReactDisqusComments
        shortname="paulomarcelodev"
        identifier={completeUrl}
        url={completeUrl}
        title={title}
      ></ReactDisqusComments>
    </CommentsWrappper>
  )
}
