'use client'

import { AuthWrapper } from '../AuthWrapper'

export function CreateAccountForm() {
	return (
		<AuthWrapper
			heading='TeaStream Registration'
			backButtonLabel='Already have an account? Sign in'
			backButtonHref='account/login'
		>
			CreateAccountForm
		</AuthWrapper>
	)
}
