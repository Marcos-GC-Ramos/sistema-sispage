export default function CardPainelSkeleton(){
    return(
        <div className="rounded-[6px] border border-gray-300 p-[9px] bg-gray-400">
            <div className=" flex flex-col justify-between gap-4 h-full min-h-[200px] animate-pulse">

                <div className="flex flex-col gap-2">
                    <div className="w-full max-w-[264px] bg-gray-300 rounded-[6px] p-2"></div>

                    <div className="w-full max-w-[208px] bg-gray-300 rounded-[6px] p-2"></div>

                    <div className="w-full flex justify-between gap-5">
                        <div className="w-full max-w-[112px] bg-gray-300 rounded-[6px] p-2"></div>
                        <div className="w-full max-w-[61px] bg-gray-300 rounded-[6px] p-2"></div>
                    </div>
                </div>

                <div className="flex flex-col gap-2">
                    <div className="w-full bg-gray-300 rounded-[6px] p-2"></div>
                    <div className="w-full max-w-[250px] bg-gray-300 rounded-[6px] p-2"></div>

                    <div className="w-full flex justify-between gap-5">
                        <div className="w-full max-w-[112px] bg-gray-300 rounded-[6px] p-2"></div>
                        <div className="w-full max-w-[50px] bg-gray-300 rounded-[6px] p-2"></div>
                    </div>

                </div>
            </div>
        </div>
    );
}