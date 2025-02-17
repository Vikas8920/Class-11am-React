import React from 'react'
import './Home.css'

const Home = () => {
    const para = {
        color: 'blue',
        backgroundColor: 'yellow',
        padding: '10px',
        fontSize: '25px'
    }
  return (
    <>
      {/* Inline CSS */}
      <h1 style={{backgroundColor:'red', textAlign: 'left'}}>Home</h1>
      <p style={para}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed id mattis tellus, sit amet vehicula erat. Etiam id nibh ac mauris fermentum laoreet nec a nisl. Interdum et malesuada fames ac ante ipsum primis in faucibus. Ut nec turpis ante. Nullam eget mauris tempus sapien dignissim hendrerit. Proin enim justo, finibus at purus et, sodales mollis purus. Fusce quam mi, lobortis ac ligula eget, vulputate finibus nulla. Nulla bibendum neque orci, vitae hendrerit dui porta eget. Cras at scelerisque risus. Nullam dapibus rutrum fermentum.</p>
      <p className='para'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed id mattis tellus, sit amet vehicula erat. Etiam id nibh ac mauris fermentum laoreet nec a nisl. Interdum et malesuada fames ac ante ipsum primis in faucibus. Ut nec turpis ante. Nullam eget mauris tempus sapien dignissim hendrerit. Proin enim justo, finibus at purus et, sodales mollis purus. Fusce quam mi, lobortis ac ligula eget, vulputate finibus nulla. Nulla bibendum neque orci, vitae hendrerit dui porta eget. Cras at scelerisque risus. Nullam dapibus rutrum fermentum.</p>
    </>
  )
}

export default Home
