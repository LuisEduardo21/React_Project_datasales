import './Header.css'
import React from 'react'
import Container from '@mui/material/Container';


export default props =>
   <Container>
    <header className='header d-none d-sm-flex flex-column'>
        <h1 className="mt-3">
            <i className={`fa fa-${props.icon}`}></i> {props.title}
        </h1>
        <p className="lead text-muted">{props.subtitle}</p>
    </header>
    </Container>