import Chatlist from "../components/chatlist";
import ChatFeed from "../components/chatfeed";
import MenuBar from "../components/menubar";

export default function ChatClient(){



    return(
        <main  className="flex ">
        <MenuBar/>
        <Chatlist/>
        <ChatFeed/>
        </main>
    )
}