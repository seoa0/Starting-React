import PostsLists from "./components/PostsLists";

function App() {
  // jsx에서 커스텀 컴포넌트 이름은 반드시 대문자로 시작
  return (
    // 항상 최상위 컴포넌트 단 하나로 감싸주어야 함!!
    <PostsLists />
  );
}

export default App;
