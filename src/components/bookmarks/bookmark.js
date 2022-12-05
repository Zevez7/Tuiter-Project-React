import * as React from 'react';
import BookmarkBorderIcon from "@mui/icons-material/BookmarkBorder";
import BookmarkIcon from "@mui/icons-material/Bookmark";
import Checkbox from '@mui/material/Checkbox';

export default function Bookmark(tuit) {
    const [checked, setChecked] = React.useState(tuit.stats.bookmark);

    const handleChange = () => {
        setChecked(!checked);
    };

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