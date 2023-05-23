import "./App.css";
import TwitterFollowCard from "./TwitterFollowCard";
const App = () => {
  const usuarios = [
    {
      userName: "facuzero",
      name: "Facundo Ezequiel Diaz",
      isFollowing: true,
    },
    {
      userName: "chancho",
      name: "Chanchin",
      isFollowing: false,
    },
    {
      userName: "Neo",
      name: "Thomas anderson",
      isFollowing: true,
    },
  ];
  return (
    <section className='App'>
      {usuarios.map(({ userName, name, isFollowing }) => (
        <TwitterFollowCard
          key={userName}
          userName={userName}
          name={name}
          isFollowing={isFollowing}
        >
          {name}
        </TwitterFollowCard>
      ))}
    </section>
  );
};
export default App;
