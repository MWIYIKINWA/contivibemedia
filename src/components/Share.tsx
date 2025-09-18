import { faFacebook, faLinkedinIn, faPinterest, faXTwitter } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

interface ShareProps {
  description: string
  url?: string;
  title?: string;
  image?: string; 
}

function Share({description, url, title, image}: ShareProps) {
  const currentUrl = url || window.location.href;
  const shareTitle = title || description;

  function ShareWebAPI() {
    if (navigator.share) {
      navigator.share({
        title: shareTitle,
        text:description,
        url: currentUrl,
      }).catch(err => alert("Error Sharing: " + err));
    }
  }

  return (
    <>
    
    <div  className="share-icon-collections my-10 flex space-x-4">
    {/* Facebook */}
    {/* <a href={`https://www.facebook.com/sharer/sharer.php?u=${url}`} target="_blank">
      <FontAwesomeIcon icon={faFacebook}/> 
    </a> */}

    {/* Twitter */}
    {/* <a href={`https://twitter.com/intent/tweet?url=${url}&text=${encodeURI(description)}`} target="_blank">
       <FontAwesomeIcon icon={faXTwitter}/>
    </a> */}
    {/* Twitter */}

    

    {/* Pintrest */}
    {/* <a href={`https://pinterest.com/pin/create/button/?url=${url}&media=&description=${encodeURI(description)}`} target="_blank">
       <FontAwesomeIcon icon={faPinterest}/>
      
    </a> */}
     {/* Pintrest */}



    {/* Linked In */}
    <a 
      href={`https://www.linkedin.com/shareArticle?mini=true&url=${currentUrl}&title=${encodeURIComponent(shareTitle)}&summary=${encodeURIComponent(description)}`}
        target="_blank" className="bg-primary px-5 py-2 rounded-full flex flex-row space-x-2 text-white"
        rel="noopener noreferrer" >
      <FontAwesomeIcon icon={faLinkedinIn} className="mt-0"/> 
      <p className="italic text-sm">Share</p>
    </a>
     {/* Linked In */}




    </div>
    </>
  )
}

export default Share;