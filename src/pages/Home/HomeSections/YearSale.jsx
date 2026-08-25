
function YearSale() {
    return (
        <>
            <div className="YearSale bg-[#EDF1F3]">
                <div className="container_1200 flex  justify-between items-center">
                    <div className="w-[550px]">
                        <div className="flex items-center gap-2.5 text-gray-400">
                            <div className="w-12 h-1 bg-gray-400"></div>
                            <h1 className="text-[30px]">10% off</h1>
                        </div>
                        <h1 className="text-[83px]">New year sale</h1>
                        <button className="bg-black text-white py-[16px] px-[50px] mt-[40px] ">
                            Shop Product
                        </button>
                    </div>
                    <div className="w-[550px]">
                        <img src="../../../../public/YearSale-img/yearSale-img.png" alt="" />
                    </div>

                </div>
            </div>
        </>
    )
}

export default YearSale
