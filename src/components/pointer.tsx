import { twMerge } from "tailwind-merge";

export default function Pointer(props: {
    name: string;
    color?: "red" | "blue";
}){

    const {name, color} = props;
    return(
        <div className="relative">
          
                    <svg xmlns="http://www.w3.org/2000/svg" 
                    
                    viewBox="0 0 320 512"
                     width="24"
                    height="24"
                    fill="white"                 
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className=" feather feather-menu size-5 "
                    
                    ><path d="M144 272l85.8 0L48 110.4l0 246.4 59.9-68.4C117 278 130.2 272 144 272zM0 426L0 55.2C0 42.4 10.4 32 23.2 32c5.7 0 11.2 2.1 15.4 5.9l274 243.6c4.7 4.2 7.4 10.2 7.4 16.5c0 12.2-9.9 22.1-22.1 22.1l-127.4 0 59.1 126.8c5.6 12 .4 26.3-11.6 31.9s-26.3 .4-31.9-11.6L126.7 339.7 38.6 440.5C34.4 445.3 28.4 448 22 448c-12.2 0-22-9.9-22-22z"/></svg>



            <div className="absolute top-full left-full">
                <div className={twMerge("inline-flex rounded-full font-bold text-sm bg-blue-500 px-2 rounded-tl-none", color === "red" && "bg-red-500")}>{name}</div>
            </div>
        </div>

    )
} 