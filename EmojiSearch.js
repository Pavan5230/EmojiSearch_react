import React, { useState } from 'react'

const emojiData= [{
    id:1,
    symbol:"🤓",
    name:"cool"
},
{
    id:2,
    symbol:"🦶",
    name:"leg"
},
{
    id:3,
    symbol:"🙎‍♀️",
    name:"women"
},
{
    id:4,
    symbol:"🥰",
    name:"love"
},
{
    id:5,
    symbol:"🤩",
    name:"star"
},
{
    id:6,
    symbol:"😴",
    name:"sleep"
},
{
    id:7,
    symbol:"🥶",
    name:"cold"
},{
    id:8,
    symbol:"🤑",
    name:"money"
},
{
    id:9,
    symbol:"🧛‍♂️",
    name:"dattu"
},
{
    id:10,
    symbol:"🎈",
    name:"ballon"
}
]
function EmojiSearch() {
    const [sEmoji,setsEmoji]=useState("");
    const handleChange=(e)=>{
        setsEmoji(e.target.value);
    }
    const showEmoji= emojiData.filter((emoji)=>{
        const emojiName = emoji.name.toLowerCase();
        return emojiName.includes(sEmoji.toLowerCase())
    })
    
  return (
    <div>EmojiSearch
        <h1>React Emoji App</h1>
        <input type='text' placeholder='Search for emoji' onChange={handleChange}></input>
        <div>
            {showEmoji.map((emoji)=>emoji.symbol)}
        </div>
    </div>
  )
}

export default EmojiSearch