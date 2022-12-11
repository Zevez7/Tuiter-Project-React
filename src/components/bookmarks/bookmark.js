import React, {useEffect, useState} from "react";
import BookmarkBorderIcon from "@mui/icons-material/BookmarkBorder";
import * as BookmarkService from '../../services/bookmark-service'
import BookmarkIcon from "@mui/icons-material/Bookmark";
import Checkbox from '@mui/material/Checkbox';

export default function Bookmark(tuit,currentUser,index, deleteBookmark) {


    const [checked, setChecked] = useState(false)

   
    const removeBookmark = async () => {
        try {
            BookmarkService.deleteBookmark(currentUser._id,tuit._id).then((data)=>{
            deleteBookmark(index);
           });

        } catch (e) {
        
        }
      };

      const createBookmark = async () => {
        try {
            BookmarkService.createBookmark(currentUser._id,tuit._id).then((data)=>{
            setChecked(true);
           });

        } catch (e) {
        }
      };

    const handleChange = async () => {

       if(checked){
        removeBookmark();
        setChecked(false);
       } else{
        createBookmark();
        setChecked(true);
       }

    };

    useEffect( () => {
       
        const findTuitIsBookmarked = async () => {
        const temp= await BookmarkService.findBookmarkByUserAndTuit(currentUser._id,tuit._id);
        if(temp.length==0){
          setChecked(false);
        }else{
            setChecked(true);
        }
    }
    findTuitIsBookmarked();
        
    }, []);

    return (
        <Checkbox
            size="small"
            checked={checked}
            onChange={handleChange}
            inputProps={{ 'aria-label': 'controlled' }}
            icon={<BookmarkBorderIcon />}
            checkedIcon={<BookmarkIcon />}
        />
    );
}