import { NextIntlClientProvider } from 'next-intl'
import { getLocale, getMessages } from 'next-intl/server'

import { ApolloClientProvider } from '@/providers/ApolloClientProvider'

import '../styles/globals.css'

export default async function RootLayout({
	children
}: Readonly<{
	children: React.ReactNode
}>) {
	const locale = await getLocale()
	const messages = await getMessages()

	return (
		<html lang={locale}>
			<body>
				<ApolloClientProvider>
					<NextIntlClientProvider messages={messages}>
						{children}
					</NextIntlClientProvider>
				</ApolloClientProvider>
			</body>
		</html>
	)
}
