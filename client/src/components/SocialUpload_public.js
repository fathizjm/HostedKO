import React from 'react'
import { TwitterEmbed ,InstagramEmbed,YouTubeEmbed} from 'react-social-media-embed';


const SocialUpload = () => {
  return (<><div style={{padding:'50px'}}>
    <div style={{ display: 'flex', justifyContent: 'space-evenly'}}>
  <TwitterEmbed url="https://twitter.com/PixelAndBracket/status/1356633038717923333" width={325} />
  <InstagramEmbed url="https://www.instagram.com/p/Cl3kJbEIiGB/?utm_source=ig_web_button_share_sheet" width={325} />
  <YouTubeEmbed url="https://www.youtube.com/watch?v=LVCYmO1agUM" width={400} height={240} />
</div>


</div>
</>
  )
}

export default SocialUpload
