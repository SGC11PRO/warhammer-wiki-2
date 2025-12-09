import './styles/card.css';

function Card({ title, content, width, height }) {
  return (
    <div className="card" >
        <div className="content">
            <p>{content}</p>
            <h3>{title}</h3>
        </div>
    </div>
  );
}

export default Card;
