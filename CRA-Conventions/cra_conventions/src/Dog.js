import './Dog.css';
import Eorah from './Eorah.jpg'

//? Always keep the component and file name the same!
function Dog() {
	return (
		<div className="Dog">
      <h1> I am a dog!!! </h1>
      <img className="Dog-img" src={ Eorah } alt="Actually a cat ^_^" />
		</div>
	);
}

//? Keep it to one component per file, and export default when possible!
export default Dog;
