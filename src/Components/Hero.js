
import React from 'react';
import iconArrow from '../images/icon-arrow.svg'
import Map from './Map';
export default function Hero(){
    const checkIpAddress = /^(([0-9]|[1-9][0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5])\.){3}([0-9]|[1-9][0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5])$/gi ;
    const [errorCheck,setErrorCheck] =  React.useState(false);
    const [ipAddressData,setIpAddressData] =  React.useState(null);
    
    
    
    const [ipAddress,setIpAddress] = React.useState();
    function handleSubmit(event){
        event.preventDefault(); 
        if(!checkIpAddress.test(ipAddress)){
            setErrorCheck(prev=>true);
        }else{
            setErrorCheck(prev=>false);
            const infoCall = async () => {
                try {
                    const res = await fetch(`https://geo.ipify.org/api/v2/country,city?apiKey=${process.env.REACT_APP_API_KEY}&ipAddress=${ipAddress}`)
                    const data = await res.json();
                    setIpAddressData(data);
                    console.log(ipAddressData);
                } catch (error) {
                    console.error(error);
                }
            };

            infoCall();
        }
        
        setIpAddress(ipAddress=>'');
    }

    function handleChange(event){

        setIpAddress(ipAddress=>event.target.value)
    }
    
    

    return (
        <div className="components">
        <div className="heroComponent">
          <div className='input-form'>
              <form onSubmit={handleSubmit}>
                    <div className='input-container'>
                        <div className='input-box'>
                            <input
                                type='text'
                                placeholder='Enter IP Address'
                                onChange={handleChange}
                                value={ipAddress}
                                aria-label='IP Address'
                            />
                        </div>
                        <div className='button-box'> 
                            <button type='submit' aria-label='Submit'>
                                <img src={iconArrow} alt="Submit" />
                            </button>
                        </div>
                    </div>
              </form>
            </div>
            {errorCheck && <div className='errorCheck'><p>*** Enter Correct IP Address ***</p></div>}
            <div className="data-list">
              <p>IP Address : {ipAddressData?<span>{ipAddressData.ip}</span>:<span style={{color:"red"}}>------------</span>}</p>
              <p>ISP : {ipAddressData?<span>{ipAddressData.isp}</span>:<span style={{color:"red"}}>------------</span>}</p>
              <p>Time : {ipAddressData?<span>{ipAddressData.location.timezone}</span>:<span style={{color:"red"}}>------------</span>}</p>
              <p>Location : {ipAddressData?<span>{ipAddressData.location.region},{ipAddressData.location.city},{ipAddressData.location.country}</span>:<span style={{color:"red"}}>------------</span>}</p>
            </div>
        </div>
        <div className="mapComponent">
            <Map 
              latitude={ipAddressData?ipAddressData.location.lat:28.7041} 
              longitude={ipAddressData?ipAddressData.location.lng:77.1025}
            />
            </div>
        </div>
    )


}