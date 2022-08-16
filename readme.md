# Usando Typescript

Branch '04-usando-typescript' com conversão de arquivos ".js", ".jsx" para ".ts" e "tsx".

1. `yarn add typescript -D`;

2. `yarn tsc --init` para gerar o arquivo de configuração;

3. Manter algumas configurações básicas no arquivo `tsconfig.json`:

```
{
  "compilerOptions": {
    "lib": ["DOM", "DOM.Iterable", "ESNext"],
    "allowJs": true,
    "jsx": "react-jsx",
    "noEmit": true,
    "strict": true,
    "moduleResolution": "node",
    "resolveJsonModule": true,
    "isolatedModules": true,
    "allowSyntheticDefaultImports": true,
    "esModuleInterop": true,
    "skipLibCheck": true,
    "forceConsistentCasingInFileNames": true,
    "target": "es2016",
    "module": "commonjs"
  },
  "include": ["src"]
}
```

4. Realizar algumas atualizações no webpack config para leitura dos arquivos ".ts" e ".tsx".

```
(...)

entry: path.resolve(__dirname, 'src', 'index.tsx'),

(...)

resolve: {
    extensions: ['.js', '.jsx','.ts', '.tsx']
  },

(...)

module: {
    rules: [
      {
        test: /\.(j|t)sx$/,

(...)
```

5. Adicionar o preset do typescript no `babel.config.js`

```
module.exports = {
  presets: [
    '@babel/preset-env',
    '@babel/preset-typescript',
    ['@babel/preset-react', {
      runtime: 'automatic',
    }],
  ]
}
```

6. Mudar a extensão dos componentes para `.tsx` criando interfaces quando necessário.

Exemplo:

```
interface RepositoryItemProps {
  repository: {
    name: string;
    description: string;
    html_url: string;
  }
}

export function RepositoryItem(props: RepositoryItemProps) {
  return (
    <li>
      <strong>{props.repository.name ?? 'Default'}</strong>
      <p>{props.repository.description}</p>
      <a href={props.repository.html_url}>
        Acessar repositório
      </a>
    </li>
  )
}
```

Exemplo de tipagem para estado do componente:

```
const [repositories, setRepositories] = useState<Repository[]>([]);
```

## 🔗 Links

[![linkedin](https://img.shields.io/badge/linkedin-0A66C2?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/vitorgonzaga/)
