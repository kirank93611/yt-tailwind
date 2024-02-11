function VideoCard(props: any){
    return <div className="p-4 cursor-pointer">
        <img src={props.image } className="rounded-xl"/>
        <div className="grid grid-cols-12">
            <div className=" col-span-1">
            <img src="/yt-test.jpeg" className={"rounded-full w-20 h-20"}/>
            </div>

            <div className="col-span-11 pl-5"> {props.title}</div>
            <div className="col-span-11 pl-5 text-gray-400 text-base">{props.author}</div>
            <div className="col-span-11 pl-5 text-gray-300 text-base">{props.views} | {props.timestamp}</div>
        </div>
    </div>
}

export default VideoCard
