export default function Item({ id, title, body }) {
  return (
    <div>
      <ul>
        <li>{id}</li>
        <li>{title}</li>
        <li>{body}</li>
      </ul>
    </div>
  );
}
