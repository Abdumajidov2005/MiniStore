import { AiOutlineCheckCircle } from "react-icons/ai"
import { CiShoppingTag } from "react-icons/ci"
import { FaCartShopping, FaMedal } from "react-icons/fa6"

function SaleCards() {
    return (
        <>
            <div className="SaleCards">
                <div className="container_1200 py-20 flex justify-between">
                    <div className="flex items-center w-[280px] gap-5">
                        <FaCartShopping color="#72AEC8" size={40} />
                        <div>
                            <h3 className="text-[20px]">Free delivery</h3>
                            <p className="text-[16px] text-gray-500">Consectetur adipi elit lorem ipsum dolor sit amet.</p>
                        </div>

                    </div>

                    <div className="flex items-center w-[280px] gap-5">
                        <FaMedal color="#72AEC8" size={40} />

                        <div>
                            <h3 className="text-[20px]">Quality guarantee</h3>
                            <p className="text-[16px] text-gray-500">Dolor sit amet orem ipsu mcons ectetur adipi elit.</p>
                        </div>

                    </div> <div className="flex items-center w-[280px] gap-5">
                        <CiShoppingTag color="#72AEC8" size={40} />

                        <div>
                            <h3 className="text-[20px]">Daily offers</h3>
                            <p className="text-[16px] text-gray-500">Amet consectetur adipi elit loreme ipsum dolor sit.</p>
                        </div>

                    </div> <div className="flex items-center w-[280px] gap-5">
                        <AiOutlineCheckCircle color="#72AEC8" size={40} />

                        <div>
                            <h3 className="text-[20px]">100% secure payment</h3>
                            <p className="text-[16px] text-gray-500 ">Rem Lopsum dolor sit amet, consectetur adipi elit.</p>
                        </div>

                    </div>
                </div>
            </div>

        </>
    )
}

export default SaleCards
