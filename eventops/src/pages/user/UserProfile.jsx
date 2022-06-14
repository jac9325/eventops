const UserProfile = () => {
  return (
    <div ClassName="App">
      <div ClassName="container d-flex flex-column justify-content-center" id="" style="max-width:100%; max-height: 100%;">
        <main ClassName="" >
          <div ClassName="row">
            <div ClassName="col-md-3 col-left">
              <div ClassName="row fila-1" style="margin-top:20px; margin-bottom:50px; ">
                <div ClassName="col-md-6 " style="display:flex; justify-content:flex-end; ">
                  <img src="./imagenes/imagen-perfil.png" alt="imagen de perfil"/>
                </div>
                <div ClassName="col-md-6" style="display:flex;flex-direction:column; justify-content:flex-start; ">
                  <p style="color: black; margin:0">Roberto <br/>Fernandez</p>
                  <p style="color:green; font-size: 13px; margin:0">Cuenta verificada</p>
                </div>
              </div>
              <div ClassName="row mi-perfil" style="color: #9F2D30; font-size:24px; margin-left: 10px;">Mi Perfil</div>
              <div ClassName="row" style="color: black; font-size:18px; margin-left: 10px;">Cerrar Sesion</div>
            </div>
            <div ClassName="col-md-6">
              <div ClassName="row" style="margin-top:20px">
                <div ClassName="col-md-11">
                  <h1 style="color:white; margin-left:20px">Mi perfil</h1>
                </div>
                <div ClassName="col-md-1">
                  <img src="./imagenes/lapiz.png" alt="lapiz"/>
                </div>
              </div>

              <div ClassName="row row-center" style="display:flex; justify-content:space-between; margin-left:-15px; margin-right:-15px; flex-direction: row;">
                <div ClassName="" style="display:flex; ">
                  <form ClassName="mb-5">
                    <div ClassName="row" style="display:flex; flex-wrap:wrap; margin-top:20px; margin-left:15px; margin-right:15px;color:white">
                      <div ClassName="col-md-6" style="flex: 0 0 50%; padding-left:15px; padding-right:15px">
                        <div ClassName="form-group">
                          <label for="firstName" ClassName="font-weight-light">
                            Nombres
                          </label>
                          <h4 ClassName="h6" style="line-height: 1;"><b>Jaime</b>
                          </h4>
                        </div>
                      </div>
                      <div ClassName="col-md-6">
                        <div ClassName="form-group">
                          <label for="firstName" ClassName="font-weight-light">
                            Apellidos
                          </label>
                          <h4 ClassName="h6" style="line-height: 1;"><b>Fernandez</b>
                          </h4>
                        </div>
                      </div>
                      <div ClassName="col-md-6">
                        <div ClassName="form-group">
                          <label for="firstName" ClassName="font-weight-light">
                            Tipo de documento
                          </label>
                          <h4 ClassName="h6" style="line-height: 1;"><b>DNI</b>
                          </h4>
                        </div>
                      </div>
                      <div ClassName="col-md-6">
                        <div ClassName="form-group">
                          <label for="firstName" ClassName="font-weight-light">
                            Número de documento
                          </label>
                          <h4 ClassName="h6" style="line-height: 1;"><b>78548965</b>
                          </h4>
                        </div>
                      </div>
                      <div ClassName="col-md-6">
                        <div ClassName="form-group">
                          <label for="firstName" ClassName="font-weight-light">
                            Email
                          </label>
                          <h4 ClassName="h6" style="line-height: 1;"><b>roberto@gmail.com</b>
                          </h4>
                        </div>
                      </div>
      
                      <div ClassName="col-md-6" style="flex: 0 0 50%; max-width: 50%;">
                        <div ClassName="form-row" style="display:flex; flex-wrap:wrap">
                          <div ClassName="form-group col-md-7">
                            <div ClassName="form-group">
                              <label for="phoneCode" ClassName="font-weight-light">
                              Código
                              </label>
                              <h4 ClassName="h6" style="line-height: 1;"><b>1254732</b>
                              </h4>
                            </div>
                          </div>
                        <div ClassName="form-group col-md-5">
                          <div ClassName="form-group">
                            <label for="phone" ClassName="font-weight-light">
                              Teléfono
                            </label>
                            <h4 ClassName="h6" style="line-height: 1;"><b>981862537</b>
                            </h4>
                            </div>
                          </div>
                        </div>
                      </div>
      
                      <div ClassName="col-md-6" style="flex: 0 0 50%; max-width: 50%;">
                        <div ClassName="form-row" style="display:flex; flex-wrap:wrap">
                          <div ClassName="form-group col-md-7">
                            <div ClassName="form-group">
                              <label for="phoneCode" ClassName="font-weight-light">
                              País
                              </label>
                              <h4 ClassName="h6" style="line-height: 1;"><b>Perú</b>
                              </h4>
                            </div>
                          </div>
                          <div ClassName="form-group col-md-5">
                            <div ClassName="form-group">
                              <label for="phone" ClassName="font-weight-light">
                                Ciudad
                              </label>
                              <h4 ClassName="h6" style="line-height: 1;"><b>Lima</b>
                              </h4>
                            </div>
                          </div>
                        </div>
                      </div>

                    </div>
                  </form>
                </div>
              </div>                                                                                                                 
            </div>
                        
            <div ClassName="col-md-3 col-right">
                <div ClassName="text-center mb-4">
                  <div ClassName="mb-6 class-imagen">
                    <img ClassName="img-fluid rounded-circle" src="./imagenes/imagen-perfil.png" alt="User" style="width: 180px;"/>
                  </div>
                  <div ClassName="class-button">
                    <button type="button" ClassName="btn btn-primary btn-sm rounded-50">
                      Cambiar / subir imagen
                    </button>
                  </div>
                </div>
            </div>
          </div>  
        </main>
      </div>
    </div>
  );
};

export default UserProfile;
