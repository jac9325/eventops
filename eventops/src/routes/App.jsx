import { Routes, Route, Navigate, useLocation } from 'react-router-dom';
import Footer from '../components/Footer';
import Nav from '../components/Nav';
import Home from '../pages/Home';
/* import ManageEvents from '../pages/user/ManageEvents'; */
/* import Tickets from '../pages/user/Tickets'; */
import UserProfile from '../pages/user/UserProfile';
import MisEntradas from '../pages/MisEntradas';
import MisEventosCreados from '../pages/MisEventosCreados';
import './App.scss';
import { SesionContext } from '../utils/SesionContext';
import { useContext } from 'react';
import NotFound from '../pages/NotFound';
import LogIn from '../pages/LogIn';
import Register from '../pages/Register';
import PasswordRecovery from '../pages/PasswordRecovery';
import ManageEventsApproval from '../pages/admin/ManageEventsApproval';
import misRutas from '../utils/routesNames';
import ManageBanner from '../pages/admin/ManageBanner';
import RequireAuth from '../utils/RequireAuth';
import HideIfLogged from '../utils/HideIfLogged';
import SearchEvents from '../pages/SearchEvents';
import Payment from '../pages/user/Payment';
import PurchaseConfirmation from '../pages/user/PurchaseConfirmation';
import FormPay from '../pages/user/FormPay';
import EventDetail from '../pages/EventDetail';
import ShopCart from '../pages/user/ShopCart';
import CreateEvent from '../pages/user/CreateEvent';

function App() {
  const { sesion } = useContext(SesionContext);
  const route = useLocation();

  return (
    <div className="eventops d-flex flex-column">
      {misRutas.includes(route.pathname) ? null : <Nav />}
      <Routes>
        {/* home */}
        <Route
          exact
          path="/"
          element={
            sesion?.type === 'admin' ? <ManageEventsApproval /> : <Home />
          }
        />

        {/* admin */}
        <Route
          exact
          path="/gestionar-banner"
          element={
            <RequireAuth type="admin">
              <ManageBanner />
            </RequireAuth>
          }
        />

        {/* user */}
        <Route
          exact
          path="/crear-evento"
          element={
            <RequireAuth type="user">
              <CreateEvent />
            </RequireAuth>
          }
        />
        <Route
          exact
          path="/carrito-compra"
          element={
            <RequireAuth type="user">
              <ShopCart />
            </RequireAuth>
          }
        />
        <Route
          exact
          path="/perfil"
          element={
            <RequireAuth type="user">
              <UserProfile />
            </RequireAuth>
          }
        />
        <Route
          exact
          path="/mis-entradas"
          element={
            <RequireAuth type="user">
              {/*               <Tickets /> */}
              <MisEntradas />
            </RequireAuth>
          }
        />
        <Route
          exact
          path="/mis-eventos"
          element={
            <RequireAuth type="user">
              {/*               <ManageEvents /> */}
              <MisEventosCreados />
            </RequireAuth>
          }
        />
        <Route
          exact
          path="/busqueda"
          element={
            sesion?.type === 'admin' ? (
              <Navigate to="/not-found" replace />
            ) : (
              <SearchEvents />
            )
          }
        />

        <Route
          exact
          path="/metodo-pago"
          element={
            <RequireAuth type="user">
              <Payment />
            </RequireAuth>
          }
        />

        <Route
          exact
          path="/confirmacion-compra"
          element={
            <RequireAuth type="user">
              <PurchaseConfirmation />
            </RequireAuth>
          }
        />

        <Route
          exact
          path="/form-pago"
          element={
            <RequireAuth type="user">
              <FormPay />
            </RequireAuth>
          }
        />
      
        {/* guest */}
        <Route
          exact
          path="/iniciar-sesion"
          element={
            <HideIfLogged>
              <LogIn />
            </HideIfLogged>
          }
        />
        <Route
          exact
          path="/registrarse"
          element={
            <HideIfLogged>
              <Register />
            </HideIfLogged>
          }
        />
        <Route
          exact
          path="/recuperar-password"
          element={
            <HideIfLogged>
              <PasswordRecovery />
            </HideIfLogged>
          }
        />
        <Route exact path="/evento-detalle" element={<EventDetail />} />

        {/* all */}
        <Route path="/not-found" element={<NotFound />} />
        <Route path="*" element={<Navigate to="/not-found" replace />} />
      </Routes>
      {misRutas.includes(route.pathname) ? null : <Footer />}
    </div>
  );
}

export default App;
