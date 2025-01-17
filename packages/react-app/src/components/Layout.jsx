import React, { Fragment } from 'react'
import Navbar from './Navbar'
import { Container } from '@mui/material'

export default function Layout(props) {
  const { children, tabValue, setTabValue } = props
  return (
    <Fragment>
      <Navbar tabValue={tabValue} setTabValue={setTabValue} />
      <Container maxWidth={false}>{children}</Container>
    </Fragment>
  )
}
