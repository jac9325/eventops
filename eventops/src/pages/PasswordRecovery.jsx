import { Link } from 'react-router-dom';
import './_PasswordRecovery.scss';

const PasswordRecovery = () => {
  return (
    <div className="simple container text-center d-flex flex-column gap-5">
      <header className="simple__top mt-4">
        <Link to="/iniciar-sesion" className="simple__back-link d-flex">
          <svg
            className="mt-1 me-3"
            width="12"
            height="18"
            viewBox="0 0 12 18"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M8.93941 0.439453L0.378906 8.99995L8.93941 17.5605L11.0604 15.4395L4.62091 8.99995L11.0604 2.56045L8.93941 0.439453Z"
              fill="#9F2D30"
            />
          </svg>
          <span>Volver al Inicio de Sesión</span>
        </Link>
        <h1 className="simple__title">
          EVEN<span>TOPS</span>
        </h1>
      </header>
      <section className="simple__main d-grid col-10 col-lg-5 mx-auto">
        <h2 className="simple__subtitle mb-5">Recuperar Contraseña</h2>
        <form action="" className="password-recovery">
          <div className="mb-4">
            <p className="password-recovery__text">
              Te enviaremos las instrucciones para cambiar tu contraseña al
              correo de tu cuenta.
            </p>
            <input
              type="email"
              className="password-recovery__mail form-control"
              id="email"
              placeholder="Tu email"
            />
          </div>
          <div className="d-grid mt-5 mb-3">
            <button
              className="password-recovery__btn btn btn-primary btn-lg fw-bold mx-3"
              type="submit"
            >
              Enviar
            </button>
          </div>
        </form>
      </section>
    </div>
  );
};

export default PasswordRecovery;
