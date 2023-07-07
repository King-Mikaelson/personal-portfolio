import { useRef, useState, useEffect } from "react";

function Projects() {
  const [isIntersecting, setIsIntersecting] = useState(false);
  const subRef = useRef(null);

//   useEffect(() => {
//     // const observer = new IntersectionObserver();
//     const rows = subRef.current?.querySelectorAll('div');
//     const observer = new IntersectionObserver(
//       ([entry]) => {
//         setIsIntersecting(entry.isIntersecting);
//       },
//       { root: null, rootMargin: "0px", threshold: 0.3 }
//     );
//     console.log(isIntersecting);
//     observer.observe(subRef.current);
//     return () => observer.disconnect();
//   }, []);

//   useEffect(() => {
//     subRef.current.classList.add("loaded");
//   }, []);


  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsIntersecting(entry.isIntersecting);
      },
      {rootMargin: "-300px", root: null}
    );
    console.log(isIntersecting);
    observer.observe(subRef.current);

    return () => observer.disconnect();
  }, [isIntersecting]);

  useEffect(() => {
    if (isIntersecting) {
      subRef.current.querySelectorAll("div").forEach((el) => {
        el.classList.add("slide-in");
      });
    } else {
      subRef.current.querySelectorAll("div").forEach((el) => {
        el.classList.remove("slide-in");
      });
    }
  }, [isIntersecting]);



  console.log(isIntersecting);
  console.log(subRef);

    const array = [
        {
            title: 'Project 1',
            src:"https://framerusercontent.com/modules/assets/XuzMZ3Z1QQHKltPqRjzGnsWs27M~Jq48dGctHPeHtnn90xE_Aem-3HQJB_aNVwfu2fao5Ok.mp4"
        },
        {
            title: 'Project 2',
            src:"https://framerusercontent.com/modules/assets/SGjFvgcbK7s4yKh0xwuNjriMNII~5SCIlrVv6SNR5PFMjsMv3qAIi3sYsG2gjdlB0qM-tng.mp4"
        },
        {
            title: 'Project 3',
            src:"https://framerusercontent.com/modules/assets/XuzMZ3Z1QQHKltPqRjzGnsWs27M~Jq48dGctHPeHtnn90xE_Aem-3HQJB_aNVwfu2fao5Ok.mp4"
        },
        {
            title: 'Project 4',
            src:"https://framerusercontent.com/modules/assets/NieGBlxBdgpz9QCHV5Aj89rWjVg~DPEeC0jYyBwx9c865cOkUi-KzBM-3ukyhpgtPhvYo_U.mp4"
        },
        {
            title: 'Project 5',
            src:"https://framerusercontent.com/modules/assets/NieGBlxBdgpz9QCHV5Aj89rWjVg~DPEeC0jYyBwx9c865cOkUi-KzBM-3ukyhpgtPhvYo_U.mp4"
        },
        {   
            title: 'Project 6',
            src:"https://framerusercontent.com/modules/assets/SGjFvgcbK7s4yKh0xwuNjriMNII~5SCIlrVv6SNR5PFMjsMv3qAIi3sYsG2gjdlB0qM-tng.mp4"
        },
        {
            title: 'Project 7',
            src:"https://framerusercontent.com/modules/assets/XuzMZ3Z1QQHKltPqRjzGnsWs27M~Jq48dGctHPeHtnn90xE_Aem-3HQJB_aNVwfu2fao5Ok.mp4"
        },  
        {
            title: 'Project 8',
            src:"https://framerusercontent.com/modules/assets/NieGBlxBdgpz9QCHV5Aj89rWjVg~DPEeC0jYyBwx9c865cOkUi-KzBM-3ukyhpgtPhvYo_U.mp4"
        },
    ] 

    // const rows = subRef.current?.querySelectorAll('div');
    // console.log(rows)
  return <main ref={subRef}  className="subref grid grid-cols-1 md:grid-cols-2 gap-5 lg:px-16  px-8 justify-center items-center  pt-24 relative bg-[#121212]">
    {
        array.map((item, index) => (
        // <div key={index} className={index % 2 === 0 ?"bg-[url('https://assets.digitalocean.com/labs/images/community_bg.png')] bg-cover bg-center h-[60vh] rounded-xl justify-center items-center flex group  ease-in-out slide1" : "bg-[url('http://i.stack.imgur.com/kx8MT.gif')] bg-cover bg-center rounded-xl justify-center items-center flex  slide2 "}>
        //     <div className="w-full h-full  justify-center ease-in glass-bg1 ">
        //     <p className="text-red-950">{item.title}</p>
        //     </div>
        // </div>
        <div key={index} className={index % 2 === 0 ?"relative  rounded-xl  flex group  ease-in-out slide1" : " rounded-xl   flex  slide2 relative "}>
        
            <div className="fixed w-[100%] h-[10rem] z-50 glass-bg1 ">
            <p className="text-white text-lg font-BebasNeue absolute top-5 right-5">{item.title}</p>
             <p className="text-white text-lg font-BebasNeue absolute top-5 left-5">{item.title}</p>
            </div>
            <video className="rounded-xl object-cover object-[50%,50%] h-[50vh]" src={item.src} width="750" height="500"  autoPlay loop muted>
     </video>
        </div>
        ))
    }
    {/* <div className="bg-purple-950 h-[60vh] rounded-xl justify-center items-center flex slide1">
            <p className="">Project 1</p>
        </div>
        <div  className="bg-purple-950 h-[60vh] rounded-xl justify-center items-center flex slide2">
            <p className="">Project 2</p>
        </div>
        <div  className="bg-purple-950 h-[60vh] rounded-xl justify-center items-center flex slide1">
            <p className="">Project 3</p>
        </div>
        <div  className="bg-purple-950 h-[60vh] rounded-xl justify-center items-center flex slide2">
            <p className="">Project 4</p>
        </div> */}
    </main>;
}

export default Projects;
