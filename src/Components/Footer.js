import githublogo from '../images/Github logo.png'
export default function footer(){
    return(
        <div className="footer">
       
                <a href="https://github.com/aftabalam0" target='blank' className='git-link'>  
                <img src={githublogo} alt="Github-logo" className='footer-logo'/>
                <p>Github</p> 
                </a>
            
                    
        </div>
    )
}
