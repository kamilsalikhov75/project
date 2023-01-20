import './Checkbox.css';

function Checkbox({ id, name }: { id: number; name: string }) {
  return (
    <li className="checkbox__item">
      <input id={id.toString()} type="checkbox" className="checkbox" />
      <label htmlFor={id.toString()}>{name}</label>
    </li>
  );
}

export { Checkbox };
