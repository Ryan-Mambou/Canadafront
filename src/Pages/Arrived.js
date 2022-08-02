import React from 'react';
import '../App.css';
import Footer from '../Components/Footer';
import InfoBox from '../Components/InfoBox';

function Arrived() {
  return (
    <div className='App'>
      <InfoBox heading='Know about Canada before joining Canada' content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer ornare ac ligula non tempus. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Nulla pharetra efficitur ipsum eu rhoncus. Suspendisse purus mi, fringilla ut nunc sed, pretium ultricies dolor. Aliquam accumsan dictum mattis. Fusce molestie nisl eget justo feugiat, eget venenatis lacus convallis. Mauris non volutpat ipsum, quis scelerisque velit. Integer fringilla bibendum lectus id posuere. Suspendisse maximus elit vitae dolor maximus pretium. Sed bibendum lacus eu nulla imperdiet, id ullamcorper tortor varius. Nulla vulputate erat ut est consequat pellentesque nec rhoncus dolor. Nullam tincidunt diam ipsum, volutpat convallis lectus aliquet non."/>
      <Footer />
    </div>
  )
}

export default Arrived