import React, { ReactElement } from 'react'
import { LayoutContainer } from '../../components/Layout'
import { SignForm } from '../../components/Form/SignForm'

export const SignUp = (): ReactElement => {
  return (
    <LayoutContainer>
      <SignForm
        title="Register"
        path="/login"
        link="Sign In"
      />
    </LayoutContainer>
  )
}
