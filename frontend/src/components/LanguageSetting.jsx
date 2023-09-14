import React, { useEffect, useState } from "react";

import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";

import { useStateContext } from "../contexts/ContextProvider";
import constants from "../data/constants";

const LanguageSetting = () => {
    const { language, setLanguage } = useStateContext();

    const [titleInfo, setTitleInfo] = useState({});

    useEffect(() => { setTitleInfo(language === 'vi' ? constants[0] : constants[1]) }, [language]);
  return (
    <div>
      <FormControl fullWidth>
        <InputLabel id="language-select-label">{titleInfo.language}</InputLabel>
        <Select
          labelId="language-select-label"
          id="language-select-label"
          value={language}
          label={titleInfo.language}
          onChange={(e) => setLanguage(e.target.value)}
        >
          <MenuItem value="vi">{titleInfo.vietnamese}</MenuItem>
          <MenuItem value="en">{titleInfo.english}</MenuItem>
        </Select>
      </FormControl>
    </div>
  );
};

export default LanguageSetting;
