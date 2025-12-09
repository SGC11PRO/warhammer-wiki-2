import Card from "./Card";
import './styles/dashboard.css';

function Dashboard() {
  return (
    <section className="dashboard">
      <Card title="Ejércitos" content="2" height={200} width={250} />
      <Card title="Miniaturas" content="120" height={200} width={250} />
      <Card title="Pinturas" content="20" height={200} width={250}/>
      <Card title="Proyectos" content="2" height={200} width={250}/>
    </section>
  );
}

export default Dashboard;
