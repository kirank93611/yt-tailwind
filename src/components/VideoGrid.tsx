import VideoCard from "./VideoCard"

const Videos=[
    {title:"how to learn coding in 30 days | 30 day plan | Code with me", image:"yt-test.jpeg", author:"Kiran Kumar", views:"30Mn",timestamp:"2 days ago"} ,
    {title:"type2 | 20 | Code with me", image:"yt-test.jpeg", author:"ravi Kumar", views:"10Mn",timestamp:"6 days ago" },
    {title:"how to learn coding in 30 days | 30 day plan | Code with me", image:"yt-test.jpeg", author:"Kiran Kumar", views:"30Mn",timestamp:"2 days ago"} ,
    {title:"type2 | 20 | Code with me", image:"yt-test.jpeg", author:"ravi Kumar", views:"10Mn",timestamp:"6 days ago" },
    {title:"how to learn coding in 30 days | 30 day plan | Code with me", image:"yt-test.jpeg", author:"Kiran Kumar", views:"30Mn",timestamp:"2 days ago"} ,
    {title:"type2 | 20 | Code with me", image:"yt-test.jpeg", author:"ravi Kumar", views:"10Mn",timestamp:"6 days ago" },
    {title:"how to learn coding in 30 days | 30 day plan | Code with me", image:"yt-test.jpeg", author:"Kiran Kumar", views:"30Mn",timestamp:"2 days ago"} ,
    {title:"type2 | 20 | Code with me", image:"yt-test.jpeg", author:"ravi Kumar", views:"10Mn",timestamp:"6 days ago" }
 ]

export const VideoGrid=() => {
  
    return <div className="grid grid-cols-4 md:grid-cols-2 lg:grid-cols-4" >
        {Videos.map(videos =>
            <div>
            <VideoCard title={videos.title} image={videos.image} author={videos.author} views={videos.views} timestamp={videos.timestamp}/> 
            </div>
         )}
    </div>
}