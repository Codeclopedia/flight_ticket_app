import { HeaderSecondRow } from "@/components/explore/headerRows"
import VerticalLine from "@/components/shapes/verticalLine"
import { faHeart, faPerson, faUser, IconDefinition } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { Divider } from "@nextui-org/react"


export default function home(){
    return <main>
        <div className="bg-white px-6 py-2 items-center">
          <HeaderFirstRow/>
          <HeaderSecondRow/>
        </div>
    </main>
}

function HeaderFirstRow(){
    return  <div className="flex flex-row w-full justify-between"> Logo | Logo 
    <HeaderRightComponent />
    </div>
}


function HeaderButtons({icon, title}:{icon: IconDefinition, title:String}){
    return <div className="flex gap-2 text-xs">
        <FontAwesomeIcon className="w-2" icon={icon} />
        {title}
    </div>
}

function HeaderRightComponent(){
    return  <div className="flex gap-3 justify-center items-center">
       <HeaderButtons  icon={faUser} title="Sign In" />
       <HeaderButtons icon={faHeart} title="Wishlist"/>
       <VerticalLine/>
       <div>7669486618</div>
     </div>
}