import { NavLink, Route, Routes } from 'react-router-dom';
import HeaderTitle from './HeaderTitle/HeaderTitle';
import Feedback from 'pages/Feedback';
import Phonebook from 'pages/Phonebook';
export const App = () => {
  return (
    <div>
      <nav>
        <ul style={{ display: 'flex', gap: 20, listStyle: 'none' }}>
          <li>
            <NavLink to="/">
              <HeaderTitle text="Home" />
            </NavLink>
          </li>
          <li>
            <NavLink to="Feedback">
              <HeaderTitle text="Feedback" />
            </NavLink>
          </li>
          <li>
            <NavLink to="Phonebook">
              <HeaderTitle text="Phonebook" />
            </NavLink>
          </li>
          <li>
            <NavLink to="ImageFinder">
              <HeaderTitle text="Image Finder" />
            </NavLink>
          </li>
        </ul>
      </nav>
      <hr />
      <Routes>
        <Route path="/">
          <Route path="Feedback" element={<Feedback />}></Route>
          <Route path="Phonebook" element={<Phonebook />} />
          <Route path="ImageFinder" element={<p> ImageFinder</p>} />
          <Route path="*" element={<p>NotFound</p>} />
        </Route>
      </Routes>
    </div>
  );
};
