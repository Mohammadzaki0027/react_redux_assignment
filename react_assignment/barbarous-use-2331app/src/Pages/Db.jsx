import { createContext } from "react"
import Newsdata from "../Component/Newsdata"
import React from "react"
let data= 
   [
      {
        title:
          "'Dying a slow death': Australia star's grim prediction for ODI cricket, 'Third-ranked behind Test and T20Is'",
        author: "NDTV Sports",
        imageurl:
          "https://cricketaddictor.com/wp-content/uploads/2021/08/Australia-National-Cricket-Team.jpg",
          id:10,
        description:
          "South Africa pulling out of their ODI series in Australia and Ben Stokes's retirement from the format",
        publishedAt: "2022-07-22",
      },
  
      {
        title:
          "T20 World Cup 2022: Best Predicted Playing XI For India In The T20 World Cup 2022 - ICC",
        author: "TechnologyBlogs",
        imageurl:
          "https://images.firstpost.com/wp-content/uploads/2021/11/Finch-Williamson-T20-World-Cup-final-Twitter-@ICC-640.jpg",
          id:9,
        description:
          "T20 World cup 2022 is set to start on October'16. The team India Coach do not want to leave even a single stone to getready the Team India for the upcoming",
        publishedAt: "2022-07-22",
      },
  
      {
        title:
          "Ricky Ponting Wants India To Play Both These Stars In T20 Wor.- NDTV Sports",
        author: "NDTV Sports",
        imageurl:
          "https://c.ndtvimg.com/2021-04/utfqet48_ricky-ponting-delhi-capitals-bcciipl_625x300_26_April_21.jpg?im=FeatureCrop,algorithm=dnn,width=806,height=605",
          id:8,
        description:
          "Ricky Ponting feels that both wicketkeeper-batters are in top form, and having both players in the team might benefit Team India.",
        publishedAt: "2022-07-22",
      },
  
      {
        title: "Sourav Ganguly, Jay Shah tenure case: SC appoints amicus curiae",
        author: "Time of India",
        imageurl:
          "https://static.toiimg.com/thumb/msid-93043597,imgsize-40652,width-400,resizemode-4/93043597.jpg",
        urlToImage: "",
        id:7,
        description:
          "The Supreme Court will hear next week a ple Sourav Ganguly, Jay Shah tenure case ",
      },
  
      {
        title: "Asia Cup Will Be Held In UAE, Says Sourav Ganguly",
        author: "Times Of India",
        imageurl:
          "https://static.toiimg.com/thumb/msid-93043597,imgsize-40652,width-400,resizemode-4/93043597.jpg",
        urlToImage: "",
        publishedAt: "2022-07-22",
        id:6,
        description:
          "The Asia Cup, which was scheduled to be held in Sri Lanka, has been shifted to the UAE",
      },
  
      {
        title: "Can Definitely Form A Pair Like Yuvraj Singh, MS Dhoni",
        author: "",
        imageurl:
          "https://img1.hscicdn.com/image/upload/f_auto,t_ds_wide_w_480,q_50/esci/media/motion/2022/0717/dm_220717_INET_CRIC_engvind_matchday_pant_non-branded_GLOBAL/dm_220717_INET_CRIC_engvind_matchday_pant_non-branded_GLOBAL.jpg",
        urlToImage: "",
        description:
          "Sunil Gavaskar On India Stars Hardik Pandya and Rishabh Pant stitched a 133-run partnership for the fifth wicket on Sunday to help India win the third and deciding ODI match against England",
        publishedAt: "2022-07-22",
        id:5
      },
  
      {
        title:
          "India women’s cricket team’s CWG 22 preparation on track despite visa delay",
        author: "Indian Express",
        imageurl: "https://images.indianexpress.com/2017/07/india-team-759.jpg",
        urlToImage: "",
        description:
          "Women's cricket is making its debut at the Commonwealth Games. The Indian squad is currently training in Bengaluru and is scheduled to leave for Birmingham on Sunday",
        publishedAt: "2022-07-20",
        id:4
      },
  
      {
        title: "'Anybody who bowls at that speed",
        author: "",
        imageurl: "https://www.crictracker.com/wp-content/uploads/2022/06/Umran-Malik.jpg",
        urlToImage: "",
        description:
          "Former England captain backs Umran Malik to play for India in T20 World Cup",
        publishedAt: "2022-07-22",
        id:3
      },
  
      {
        title: "Leicester cricket ground to be named after Sunil Gavaskar",
        author: "",
        imageurl: "https://images.news18.com/ibnlive/uploads/2022/05/sunil-gavaksr-1-16528637393x2.jpg?impolicy=website&width=510&height=356",
        urlToImage: "",
        description:
          " sunil gavaskar is truly India's global cricket ambassador. The batting legend, ",
        publishedAt: "2022-07-22",
        id:2
      },
  
      
  
      {
        title: "Double blow for South Africa ahead of Commonwealth Games",
        author: "",
        imageurl: "http://femalecricket.com/wp-content/uploads/2019/09/South-Africa-Womens-Cricket-team-FemaleCricket.jpg",
        urlToImage: "",
        description:
        "Two players from South Africa's tour of England are returning home and are in doubt for Birmingham 2022. ",
        publishedAt: "2022-07-22",
        id:1
      },
  
   
    ]
  
  export const Datacontext=createContext()

  export const  NewsDatacontext=({children})=>{

    const[newsdata,setNewsdata]=React.useState(data)
    
return(
    <Datacontext.Provider value={newsdata} >{children}</Datacontext.Provider>
)
  }
  