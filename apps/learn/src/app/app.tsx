// eslint-disable-next-line @typescript-eslint/no-unused-vars
import styles from './app.module.css';
import { Header } from '@lib/shared-components';

export function App() {
  return (
    <div>
      <Header siteTitle="bla bla">
        <div></div>
      </Header>
      hello world!
    </div>
  );
}

export default App;
