import styles from "./Post.module.css";

function Post(props) {
  return (
    <div className={styles.post}>
      {/* 중괄호를 활용해 값을 동적으로 출력하기 */}
      <p className={styles.author}>{props.author}</p>
      <p className={styles.text}>{props.body}</p>
    </div>
  );
}

export default Post;
