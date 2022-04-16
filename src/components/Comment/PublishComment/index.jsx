// 该文件是留言区发布评论的组件

import React, {useState} from 'react'
import { Comment, Avatar, Form, Button, List, Input } from 'antd';
import moment from 'moment';

const { TextArea } = Input;

const CommentList = ({ comments }) => (
  <List
    dataSource={comments}
    header={`${comments.length} ${comments.length > 1 ? 'replies' : 'reply'}`}
    itemLayout="horizontal"
    renderItem={props => <Comment {...props} />}
  />
);

const Editor = ({ onChange, onSubmit, submitting, value }) => (
  <>
    <Form.Item>
      <TextArea rows={4} onChange={onChange} value={value} />
    </Form.Item>
    <Form.Item>
      <Button htmlType="submit" loading={submitting} onClick={onSubmit} type="primary">
        Add Comment
      </Button>
    </Form.Item>
  </>
);

export default function PublishComment() {
  const [comments, setComments] = useState([])
  const [submitting, setSubmit] = useState(false)
  const [value, setValue] = useState('')

  const handleSubmit = () => {
    if (value) return;

    setSubmit(true)

    setTimeout(() => {
      setSubmit(false)
      setValue('')
      setComments([
        ...comments,
        {
          author: 'Han Solo',
          avatar: 'https://joeschmoe.io/api/v1/random',
          content: <p>{value}</p>,
          datetime: moment().fromNow(),
        },
      ])
    }, 1000);
  };

  const handleChange = e => {
    setValue(e.target.value)
  };

  return (
    <div>
      {comments.length > 0 && <CommentList comments={comments} />}
        <Comment
          avatar={<Avatar src="https://joeschmoe.io/api/v1/random" alt="Han Solo" />}
          content={
            <Editor
              onChange={handleChange}
              onSubmit={handleSubmit}
              submitting={submitting}
              value={value}
            />
          }
        />
    </div>
  )
}
