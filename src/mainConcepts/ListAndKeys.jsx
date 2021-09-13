const posts = [
  { id: 1, title: "Hello World", content: "Welcome to learning React!" },
  { id: 2, title: "Installation", content: "You can install React from npm." },
];

const numbers = [1, 2, 3, 4, 5];

function NumberList(props) {
  return <li>{props.value}</li>;
}

function Blog(props) {
  const sidebar = props.posts.map((post) => (
    <li key={post.id}>{post.title}</li>
  ));
  const content = props.posts.map((post) => (
    <li key={post.id}>
      {post.title}
      {post.content}
    </li>
  ));
  return (
    <div>
      <hr />
      {sidebar} <hr />
      {content}
    </div>
  );
}

function ListandKeys(props) {
  const listItems = numbers.map((number) => (
    <div>
      <NumberList key={number.toString()} value={number} />
    </div>
  ));
  return (
    <div>
      <hr />
      <h3>8. List and Keys</h3>
      <ul>{listItems}</ul>
      <ol>
        <Blog posts={posts} />
      </ol>
    </div>
  );
}

export default ListandKeys;
