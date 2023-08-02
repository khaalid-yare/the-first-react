export const Header = function () {
  return <nav style={{
    display: 'flex',
    justifyContent: 'space-around',
    position: 'relative',
  }}>
    <ul><li style={{
      listStyle: 'none',
    }}><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTnkMNS3jQPnMMvKqeCh5tw8M2150RTBGrUtumz99LM3Q&s" alt="" style={{
      width:'80px',
      height:'80px',
      position:'absolute',
    }}/></li></ul>
    <ul style={{
      listStyle: 'none',
      display: 'flex',
      gap: '30px',
      fontSize: '1.5rem',
      marginTop:'30px',
    }}>
  <li>Home</li>
  <li>About Me</li>
  <li>Contact</li>
  <li>Courses</li>
  </ul></nav>
};

export const Hero = function () {
  return <section style={{
    display: 'flex',
    gap: '30px'
  }}> 
<div>
  <img src="https://images.pexels.com/photos/9981592/pexels-photo-9981592.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" style={{
    width: '450px',
    height: '570px',
    marginLeft: '100px',
    marginTop: '50px',
    borderRadius: '10px',
  }}/>
</div>
<div style={{
  marginTop: '90px',
  fontSize: '1.5rem,',
  lineBreak: 'anywhere else',
  lineHeight: '37px',
}}>
Rolex is a privately held company that was founded in London, <br />
 England, in 1905 by Hans Wilsdorf and Alfred Davis. It later <br />
 moved its headquarters and manufacturing to Geneva, Switzerland, <br />
 which is renowned for its watchmaking heritage and expertise. <br />
The brand's name "Rolex" is said to have been chosen because it is <br />
short, easy to pronounce in any language, and looks good on watch <br />
dials. Rolex has become one of the most iconic and recognizable luxury <br />
 watch brands globally, synonymous with excellence, precision, and luxury. <br />

</div>
</section>
};