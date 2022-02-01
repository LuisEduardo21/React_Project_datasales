import React from 'react'
import Button from '@mui/material/Button'
import Container from '@mui/material/Container';



export default props =>
   <Container>
    <div className="form">
        <div className="row">
            <div className="col-12 col-md-6">
                <div className="name">
                    <label>Nome</label>
                    <input type="text"
                        name="name"
                        id="name"
                        className="form-control"
                        autoComplete='off'
                        value={props.name}
                        onChange={e => props.updateField(e)}
                        onKeyPress={props.handleEnterPress}
                        placeholder='Digite o nome...' />
                </div>
            </div>

            <div  className="col-12 col-md-6">
                <div className="email">
                    <label>E-mail</label>
                    <input type="email"
                        name="email"
                        id="email"
                        className="form-control"
                        autoComplete='off'
                        value={props.email}
                        onChange={e => props.updateField(e)}
                        onKeyPress={props.handleEnterPress}
                        placeholder="Digite o e-mail..." />
                </div>
            </div>
        </div>

        <hr />

        <div className="row">
            <div className="col-12 d-flex justify-content-end">
                <Button variant="contained" className="btn btn-success" onClick={props.save}>
                    <i className="fa fa-save mr-1"></i> Salvar
                </Button>
                <Button variant="contained" className="btn btn-danger ml-2" onClick={props.clear}>
                    <i className="fa fa-remove mr-1"></i> Cancelar
                </Button>
            </div>
        </div>

    </div>
    </Container>
