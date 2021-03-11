import MessageIcon from '@material-ui/icons/Message';
import InboxIcon from '@material-ui/icons/Inbox';
import BookmarkBorderIcon from '@material-ui/icons/BookmarkBorder';
import GroupIcon from '@material-ui/icons/Group';
import DraftsIcon from '@material-ui/icons/Drafts';
import AppsIcon from '@material-ui/icons/Apps';
export const sidebarItemsData =[
    {
        icon: <MessageIcon/>,
        text: "Thread"
    },
    {
        icon: <InboxIcon/>,
        text: "All DM's"
    },
    {
        icon: <DraftsIcon/>,
        text: "Mentions & Reactions"
    },
    {
        icon: <BookmarkBorderIcon/>,
        text: "Save items"
    },
    {
        icon: <GroupIcon/>,
        text: "People & Groups"
    },
    {
        icon: <AppsIcon/>,
        text: "More"
    },
]