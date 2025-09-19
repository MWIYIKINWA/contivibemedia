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
  
    {/* Linked In */}
        <a 
          href={`https://www.linkedin.com/shareArticle?mini=true&url=${encodeURIComponent(currentUrl)}`}
          target="_blank"
          rel="noopener noreferrer"
          className="bg-primary px-5 py-2 rounded-full flex flex-row space-x-2 text-white"
        >
          <FontAwesomeIcon icon={faLinkedinIn} className="mt-0"/> 
          <p className="italic text-sm">Share</p>
        </a>

     {/* Linked In */}




    </div>
    </>
  )
}

export default Share;