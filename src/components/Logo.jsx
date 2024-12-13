import logo from '../assets/main-logo.jpg';  // Adjust path as per your project structure

// eslint-disable-next-line react/prop-types
function Logo({ width = '100px' }) {
  return (
    <div>
      <img src={logo} width={width} alt="Logo" className=' rounded-full' />
    </div>
  );
}

export default Logo;



// function Logo({width = '100px'}) {
//   return (
//     <div>
//       <img src='/assets/main-logo.jpg' width={width} />
//     </div>
//   )
// }

// export default Logo


// function Logo() {
//   return (
//     <div>
//       <img src='https://img.freepik.com/free-vector/colorful-letter-o-gradient-logo-design_474888-2306.jpg?t=st=1733291777~exp=1733295377~hmac=75fb99ab6dd1a217f8ea2045aea422bc317a778665cbde1ead2bec249e81d02f&w=740' width={50} alt={"Main Logo"} />
//     </div>
//   )
// }

// export default Logo