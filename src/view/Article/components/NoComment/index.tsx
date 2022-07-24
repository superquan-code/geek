/*
 * @Author: quan
 * @Date: 2022-07-23 16:02:05
 * @LastEditors: quan
 * @LastEditTime: 2022-07-23 16:02:05
 * @Description: file content
 */
import noCommentImage from '@/assets/none.png'
import styles from './index.module.scss'

const NoComment = () => {
  return (
    <div className={styles.root}>
      <img src={noCommentImage} alt="" />
      <p className="no-comment">还没有人评论哦</p>
    </div>
  )
}

export default NoComment
