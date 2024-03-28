import * as React from "react";
import Avatar from "@mui/material/Avatar";
import Stack from "@mui/material/Stack";

export default function ImageAvatars({ source, name }) {
  return (
    <Stack direction='row' spacing={2}>
      <Avatar sx={{ width: 150, height: 150 }} alt='Remy Sharp' src={source} />
      <div className='writing-font2'> {name} </div>
    </Stack>
  );
}
