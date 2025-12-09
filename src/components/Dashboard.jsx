import Card from "./Card";
import './styles/dashboard.css';

// images
import paint from '/images/paint.png';
import shield from '/images/shield.png';
import tool from '/images/tool.png';
import user from '/images/user.png';

function Dashboard() {
  return (
    <section className="dashboard">
      <Card title="Ejércitos" content="2" height={200} width={250} icon={shield}/>
      <Card title="Miniaturas" content="120" height={200} width={250} icon={user} />
      <Card title="Pinturas" content="20" height={200} width={250} icon={paint} />
      <Card title="Proyectos" content="2" height={200} width={250} icon={tool} />
    </section>
  );
}

export default Dashboard;
