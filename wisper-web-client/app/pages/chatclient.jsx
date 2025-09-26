import Chatlist from "../components/chatlist";
import MenuBar from "../components/menubar";

export default function ChatClient(){



    return(
        <main  className="flex ">
        <MenuBar/>
        <Chatlist/>
        </main>
    )
}