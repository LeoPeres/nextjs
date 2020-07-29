const Repos = ({ repos, currentDate }) => {
  return (
    <div>
      <h1>{currentDate}</h1>
      <pre>{JSON.stringify(repos)}</pre>
    </div>
  );
};

export async function getStaticProps() {
  const request = await fetch("https://api.github.com/users/LeoPeres/repos");
  const repos = await request.json();
  return {
    props: {
      currentDate: new Date().toString(),
      repos,
    },
    revalidate: 10,
  };
}

export default Repos;
