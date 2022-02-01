import React from 'react'
import Button from '@mui/material/Button';
import ListItem from '@mui/material/ListItem';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';

export default props => {

    const lista = props.list

    return (
    <Container>
        <table className="table mt-4">
            <thead>
                <tr>
                    <th>#</th>
                    <th>Nome</th>
                    <th>E-mail</th>
                    <th>Ações</th>
                </tr>
            </thead>
            <tbody>
                {lista.map(user => {
                    return (
                        <tr key={user.id}>
                            <td>{user.id}</td>
                            <td>{user.name}</td>
                            <td>{user.email}</td>
                            <td>
                                <Box >
                                <Button variant="contained"  className="btn btn-warning" title='Editar' onClick={() => props.load(user)}>
                                    <i className="fa fa-pencil"></i> Editar
                                </Button>
                                <Button variant="contained" className="btn btn-danger ml-2" id='btn-excluir' title='Excluir' onClick={() => props.remove(user)}>
                                    <i className="fa fa-trash"></i> Excluir
                                </Button>
                                </Box>
                            </td>
                        </tr>
                    )
                })}
            </tbody>
        </table>
        </Container>
    )
}