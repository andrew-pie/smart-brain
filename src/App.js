import Navigation from './components/Navigation/Navigation';
import Logo from './components/Logo/Logo';
import ImageLinkForm from './components/ImageLinkForm/ImageLinkForm';
// import './App.css';

function App() {
	return (
		<div className="App">
			<header className="App-header">
				<Navigation />
				<Logo />
				{/* {
				<ImageLinkForm />
				<FaceRecognition />} */}
			</header>
		</div>
	);
}

export default App;
