import { FaCalendarAlt, FaRegCalendarAlt } from "react-icons/fa";
import { LuSearch } from "react-icons/lu";
import { MdEditSquare, MdRemoveRedEye } from "react-icons/md";
import { RiDeleteBin3Fill } from "react-icons/ri";


export default function DoctorRecord() {

    return (
        <div className="bg-white p-3">
            <div className='d-flex justify-between mb-3 align-items-center'>
                <h5 className='text-semibold mt-1'>Search Results</h5>
                <div className='d-flex gap-3'>
                    <div className="relative">
                        <input
                            type="text"
                            placeholder="Search Doctor"
                            className="rounded-3xl py-2"
                            style={{
                                outline: "none",
                                border: "none",
                                backgroundColor: "#F6F8F8",
                                paddingLeft: "40px",
                                width: "250px",
                            }}
                        />
                        <button className="absolute left-2 top-1/2 transform -translate-y-1/2 rounded-lg p-1">
                            <LuSearch className='fw-bold' />
                        </button>
                    </div>
                </div>

            </div>
            <div className="gap-4 h-50 ">
                <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400"> 
                    <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                        <tr>
                            <th scope="col" className="px-6 py-3">
                                Doctor Name
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Gender
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Qualification
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Specialty
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Working Time
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Patient Check Up Time
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Break Time
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Action
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                            <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                Apple MacBook Pro 17"
                            </th>
                            <td class="px-6 py-4">
                                Silver
                            </td>
                            <td class="px-6 py-4">
                                Laptop
                            </td>
                            <td class="px-6 py-4">
                                $2999
                            </td>
                            <td class="px-6 py-4 text-bold">
                                <div className="bg-[#F6F8FB] text-[#718EBF] rounded-3xl d-flex align-items-center justify-content-center" style={{ width: "70px", height: "30px", fontWeight: "500" }}>$2999</div>
                            </td>
                            <td class="px-6 py-4 text-bold">
                                <div className="bg-[#F6F8FB] text-[#718EBF] rounded-3xl d-flex align-items-center justify-content-center" style={{ width: "70px", height: "30px", fontWeight: "500" }}>$2999</div>
                            </td>
                            <td class="px-6 py-4 text-bold">
                                <div className="bg-[#F6F8FB] text-[#718EBF] rounded-3xl d-flex align-items-center justify-content-center" style={{ width: "70px", height: "30px", fontWeight: "500" }}>$2999</div>
                            </td>
                            <td class="px-6 py-4 text-bold d-flex gap-2">
                                <div className="d-flex align-items-center justify-content-center">
                                    <MdEditSquare className="text-[#39973D] fs-5" />
                                </div>
                                <div className="d-flex align-items-center justify-content-center">
                                    <MdRemoveRedEye className="text-[#0EABEB] fs-5" />
                                </div>
                                <div className="d-flex align-items-center justify-content-center">
                                    <RiDeleteBin3Fill className="text-[#E11D29] fs-5" />
                                </div>
                            </td>
                        </tr>

                    </tbody>
                </table>

            </div>
        </div>
    );
}
