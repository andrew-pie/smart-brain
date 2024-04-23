import Navigation from './components/Navigation/Navigation';
import Logo from './components/Logo/Logo';
import ImageLinkForm from './components/ImageLinkForm/ImageLinkForm';
import Rank from './components/Rank/Rank';
import ParticlesBg from 'particles-bg';
import './App.css';

function App() {
	return (
		<div className="App">
			<ParticlesBg type="cobweb" bg={true} />
			<header className="App-header">
				<Navigation />
				<Logo />
				<Rank />
				<ImageLinkForm />
				{/* {
				<FaceRecognition />} */}
			</header>
		</div>
	);
}

export default App;
