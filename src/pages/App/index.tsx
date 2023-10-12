import { Header } from '../Header';
import { Contacts } from '../Contacts';
import { AboutMe } from '../AboutMe';
import { Education } from '../Education';

export function App() {
  return (
    <div className="bg-blue-50 mx-60">
      <Header />
      <Contacts />
      <AboutMe />
      <Education />
      <div className="p-4 ">Hello</div>
    </div>
  );
}
