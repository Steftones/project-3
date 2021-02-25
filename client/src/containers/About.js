import React from 'react'
import { useHistory } from 'react-router-dom'
import { Button, Container, Table } from 'react-bootstrap'

import NavBar from '../components/Navbar'

const About = () => {

  const history = useHistory()

  console.log('%cHello!', 'color: red; font-family: sans-serif; font-size: 4.5em; font-weight: bolder; text-shadow: #000 1px 1px;', '\nAre you reading? We\'re hiring!\n\nGet in contact today...\n\n')

  return <>
    <NavBar />
    <Container>
      <h1>About us</h1>
      <p>
        Dérive brings together like-minded individuals who have a passion for travelling and provides a space to explore countries, connect with others and share experiences.
      </p>
      <h3>Created by</h3>
      <p>
        <a href="https://github.com/hannahakhtar">Hannah Akhtar</a>, <a href="https://github.com/srosser2">Sam Rosser</a> and <a href="https://github.com/steftones">Stefan Sokolowski</a> as part of Project 3 for <a href="https://generalassemb.ly/">General Assembly’s</a> Software Engineering Immersive.
      </p>
      <div>
        Technology used:
        <Table borderless={true}>
          <thead>
            <tr>
              <th><img width="100px" src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/61/HTML5_logo_and_wordmark.svg/1200px-HTML5_logo_and_wordmark.svg.png" alt="HTML5" /></th>
              <th><img width="100px" src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/CSS3_logo_and_wordmark.svg/1200px-CSS3_logo_and_wordmark.svg.png" alt="CSS" /></th>
              <th><img width="100px" src="https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png" alt="Javascript" /></th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th><img width="100px" src="https://cdn.freebiesupply.com/logos/large/2x/react-1-logo-png-transparent.png" alt="React" /></th>
              <th><img width="100px" src="https://logodix.com/logo/1960631.png" alt="Mongo DB" /></th>
              <th><img width="100px" src="https://i.pinimg.com/originals/69/e0/cd/69e0cd050ef9b12f2e2bc47af0afc6b6.png" alt="Mongoose" /></th>
            </tr>
            <tr>
              <th><img width="100px" src="https://cdn.pixabay.com/photo/2015/04/23/17/41/node-js-736399_960_720.png" alt="Node JS" /></th>
              <th><img width="100px" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTInyKv-rwtCwa_GmVdr1lOXu6PWPzTO1kMLpRLFuqIhDi4YBIGJgq8MmRQ9tvAj3YLh7M&usqp=CAU" alt="Mapbox" /></th>
              <th><img width="100px" src="https://i.pinimg.com/originals/c1/78/5d/c1785d50a929254419fa4aad0560b058.png" alt="React Bootstrap" /></th>
            </tr>
          </tbody>
        </Table>
      </div>
      <br />
      <Button onClick={() => history.goBack()}>Go back</Button>
    </Container>
  </>
}

export default About