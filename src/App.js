import './App.css';
import Navigation from './components/Navigation/Navigation';
import Logo from './components/Logo/Logo';
import ImageLinkForm from './components/ImageLinkForm/ImageLinkForm';
import Rank from './components/Rank/Rank';
// import ParticlesBg from 'particles-bg';
import { Component } from 'react';
import FaceRecognition from './components/FaceRecognition/FaceRecognition';
import SignIn from './components/SignIn/SignIn';
import Register from './components/Register/Register';

const initialState = {
    input: '',
    imageLink: "",
    boxes: [],
    route: "signin",
    isSignIn: false,
    user:
      {
        id: "",
        name: "",
        email: "",
        entries: 0,
        joined: ''
      }
}
class App extends Component {
  constructor(){
    super();
    this.state = initialState;
  }

  loadUser=(data)=>{
    this.setState({user: {
        id: data.id,
        name: data.name,
        email: data.email,
        entries: data.entries,
        joined: data.joined
      }
    })
  }

  // componentDidMount(){
  //   fetch('http://localhost:3000')
  //   .then(response=>response.json())
  //   .then(console.log);
  // }

  inputChange = (event) => {
    this.setState({input: event.target.value});
  }

  faceLocation = (data) => {
    const facesPosition = data.outputs[0].data.regions;
    const image = document.getElementById("image");
    const imageWidth = image.width;
    const imageHeight = image.height;
 
    return (facesPosition.map((facePosition) => { 
      return { 
      leftCol : imageWidth * facePosition.region_info.bounding_box.left_col,
      topRow : imageHeight * facePosition.region_info.bounding_box.top_row,
      rightCol : imageWidth - (imageWidth * facePosition.region_info.bounding_box.right_col),
      bottomRow : imageHeight - (imageHeight * facePosition.region_info.bounding_box.bottom_row)
      };
    }));
  }

  settingBox = (boxes) =>{
    this.setState({boxes: boxes});
  }

  onPictureSubmit = () =>{
    this.setState({imageLink: this.state.input});

    fetch('http://localhost:3000/imageurl', {
      method: 'post',
      headers: {'Content-Type':'application/json'},
      body: JSON.stringify({              
        imageURL : this.state.input
      })
    })
    .then(response => response.json())
    .then(result => {
      fetch('http://localhost:3000/image', {
          method: 'put',
          headers: {'Content-Type':'application/json'},
          body: JSON.stringify({              
            id: this.state.user.id
        })
      })
      .then(response=>response.json())
      .then(count=>{
        this.setState(Object.assign(this.state.user,{entries: count}))
      })
      .catch(err=>console.log(err));
      this.settingBox(this.faceLocation(result));
    })
    .catch(error => console.log('error', error));
  
  }

  onChangeRoute = (route) =>{
    if (route === "signin"){
      this.setState(initialState);
    } else if (route === "home") {
      this.setState({isSignIn: true});
    }
      this.setState({route: route});
  }

  render(){
    const {imageLink, boxes, route, isSignIn} = this.state;
    return (
      <div className="App">
        {/* <ParticlesBg color="#61e4ff" num={4} type="circle" bg={true}/> */}
        <Navigation onChangeRoute={this.onChangeRoute} isSignIn={isSignIn}/>
        {route === "signin"
          ? <SignIn onChangeRoute={this.onChangeRoute} loadUser={this.loadUser}/>
          : route === "register"
          ? <Register onChangeRoute={this.onChangeRoute} loadUser={this.loadUser}/>
          : <div>
              <Logo/>
              <Rank userName={this.state.user.name} userEntries={this.state.user.entries}/>
              <ImageLinkForm inputChange={this.inputChange} onButtonSubmit={this.onPictureSubmit}/>
              <FaceRecognition image={imageLink} boxes={boxes}/>
            </div>
        }        
      </div>
    );
  }
}

export default App;
