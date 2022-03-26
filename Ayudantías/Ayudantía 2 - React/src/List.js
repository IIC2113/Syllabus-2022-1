export function List(props) {
  return (
    <ul>
      {props.tasks.map((task, index) => (
        <li index={index} onClick={props.handleClick}>
          {task}
        </li>
      ))}
    </ul>
  );
}

