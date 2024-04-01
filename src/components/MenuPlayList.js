import {FaPlus} from 'react-icons/fa'
import {BsMusicNoteList , BsTrash} from 'react-icons/bs'
import PlayList from './PlayList'

const MenuPlayList = ({title , playListItems})=>{
    return (
        <div className="playListContainer">
            <div className="nameContainer">
                <p>{title}</p>
                <i><FaPlus/></i>
            </div>
            <div className="playListScroll">
                {
                playListItems && playListItems.map((list)=>(
                    <div className="playList" key={list.id}>
                    <i className="list">
                        <BsMusicNoteList/>
                    </i>

                    <p>{list.name}</p>

                    <i className='trash'>
                        <BsTrash/>
                    </i>
                </div>
                ))
                }
                
            </div>
        </div>
    )
}

export default MenuPlayList;