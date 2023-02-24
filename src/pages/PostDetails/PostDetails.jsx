import { LikeOutlined } from '@ant-design/icons'
import { IconText, Loading } from 'components'
import { useQuery } from 'react-query'
import { useParams } from 'react-router-dom'
import postService from 'services/post'

const PostDetails = () => {
  const { postId } = useParams()

  const {
    isLoading,
    data: post,
    error,
  } = useQuery('post', () => postService.fetchPost(postId))

  if (error) {
    return <h1>{error.message}</h1>
  }

  return (
    <>
      {isLoading && <Loading />}
      {!isLoading && (
        <>
          <h1>{post.title}</h1>
          <p>{post.body}</p>
          <IconText icon={LikeOutlined} text={post.likesCount} />
        </>
      )}
    </>
  )
}
export default PostDetails
