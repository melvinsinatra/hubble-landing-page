import { Container } from './components/styles/Container.styled';
import { ThemeProvider } from 'styled-components';
import { Header, Card, Footer } from './components';
import GlobalStyles from './components/styles/Global';
import { content } from './constants';

const theme = {
	colors: {
		header: '#ebfbff',
		body: '#fff',
		footer: '#003333'
	},
	breakpoints: {
		mobile: '768px'
	}
};

function App() {
	const contentCardEls = content.map((item, index) => (
		<Card
			key={index}
			item={item}/>
	));

	return (
		<ThemeProvider theme={theme}>
			<GlobalStyles />
			<Header />
			<Container>
				<h1>Hello world</h1>
				{contentCardEls}
			</Container>
			<Footer />
		</ThemeProvider>
	);
}

export default App;
