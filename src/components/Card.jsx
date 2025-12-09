import './styles/card.css';

function Card({ title, content, icon}) {
  return (
    <div className="card" >
        <div className="content">
          <h3>{title}</h3>
          <p>{content}</p>
        </div>
        <div className="icon">
          <img src={icon} alt={title} />
        </div>
    </div>
  );
}

export default Card;
