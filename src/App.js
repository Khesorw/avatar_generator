
import { useState } from 'react';
import './App.css';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';








//jsut avatar with catagory








function App() {


  
  
// const [image, setImage] = useState('bottts');
// const [seed, setSeed] = useState(2133);




  
// function downloadAvater() {

  


//   let confit = {
//     method: "get",
//     url: `https://api.dicebear.com/9.x/${image}/svg?seed=${seed}`,
//     responseType: "arraybuffer"
//   };


  
//   Axios({  method: "get",
//     url: `https://api.dicebear.com/9.x/${image}/svg?seed=${seed}`,
//     responseType: "arraybuffer"
//   })
//     .then((resopnse) => {
//     const link = document.createElement('a');

//       link.href = window.URL.createObjectURL(
//         new Blob([resopnse.data], { type: "application/octed-stream" })
//       );


//     link.download = `${seed}.svg`;

//     document.body.appendChild(link);

//     link.click();

//     setTimeout(() => {
//       window.URL.revokeObjectURL(link.href);
      
//     }, 200);


//   })
//     .catch((error) => {
//       console.error("Error while downloading avatar: " + error);
//     });
  
// };

// function setAvater(avaterDesc) {
//   setImage(avaterDesc);

// }

const TheHeader = () => {


  return (
    <header className='container-fluid p-4  bg-primary text-center text-white'>
      <h1>Random Avatar Generator</h1>
     </header>
  );
}
 

// function randomize() {
  
//   let x = Math.floor(Math.random() * 1000);

//   setSeed(x);
// }

  
  
  
  const [avatar, setAvatar] = useState("bottts");
  const [seed, setSeed] = useState("1234");


  let avatarUrl = `https://api.dicebear.com/9.x/${avatar}/svg?seed=${seed}`;


  function randomize() {
    
    let x = Math.floor(Math.random() * 100);

    setSeed(x);
  }

  function nextAvatar(input) {
    setAvatar(input);
  }



  function downloadImage() {

    axios({
      method: "get",
      url: avatarUrl,
      responseType: "arraybuffer"
    }).then((result) => {
      
      let link = document.createElement("a");

      link.href = window.URL.createObjectURL(new Blob([result.data], { type: "application/octed-stream" }));

      link.download = `${seed}.svg`;

      document.body.appendChild(link);

      link.click();

      setTimeout(() => {
        window.URL.revokeObjectURL(link.href);
      }, 200);
    }).catch((error) => {
      console.log("error while downloading iamge..." + error);
    })
    
  }
  
  return (
    <div >
      <TheHeader />
      <div className='home'>
        <div className='btn-group d-flex gap-2'>
          <button type='button' className='btn btn-info text-white rounded' onClick={() => {
            nextAvatar("pixel-art")
          }}>Human</button>
          <button type='button' className='btn bg-secondary text-white rounded' onClick={() => {
            nextAvatar("big-ears")
          }}>Big Ears</button>
          <button type='button' className='btn bg-warning text-white rounded' onClick={() => {
            nextAvatar("bottts")
          }}>Bots</button>
          <button type='button' className='btn bg-primary text-white rounded'
          onClick={() => {
            nextAvatar("big-smile")
          }}>smile</button>
          <button type='button' className='btn bg-success text-white rounded'
          onClick={() => {
            nextAvatar("croodles")
          }}>croodles</button>
          <button type='button' className='btn bg-danger text-white rounded'
          onClick={() => {
            nextAvatar("icons")
          }}>icons</button>
          <button type='button' className='btn bg-dark text-white rounded '
          onClick={() => {
            nextAvatar("micah")
          }}>micah</button>
        </div>
        <div className='avatar'>
          <img src={avatarUrl} alt='Avatar' style={{ width: 240, height: 250, marginTop: 55}} />
        </div>
        <div className='nexDow'> 
          <button className='btn btn-primary' onClick={() => {
            randomize();
          }}>Next</button>
          <button className=" btn btn-success"onClick={() => {
            downloadImage();
          }}>Download</button>
        </div>
      </div>
    </div>
  );
}

export default App;
