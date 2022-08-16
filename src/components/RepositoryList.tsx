import { useEffect, useState } from "react";
import "../../styles/repositories.scss";
import { RepositoryItem } from "./RepositoryItem";

// https://api.github.com/orgs/rocketseat/repos

interface Repository {
  id: string;
  name: string;
  description: string;
  html_url: string;
}

export function RepositoryList() {

  const [repositories, setRepositories] = useState<Repository[]>([]);

  // ciclo de vida do componente
  // array vazio = ComponentDidMount
  // array com dependencias = ComponenteShoudUpdate

  useEffect(() => {
    fetch('https://api.github.com/orgs/rocketseat/repos')
      .then(response => response.json())
      .then(data => setRepositories(data))
  }, [])

  console.log(repositories);

  return (
    <section className="repository-list">
      <h1>Lista de repositórios</h1>
      <ul>
        {
          repositories.map(repository => {
            return <RepositoryItem repository={repository} key={repository.id}/>
          })
        }
      </ul>
    </section>
  )
}