import { GoDotFill } from "react-icons/go";
import Billingpayment from '../images/billingpayment.png'
import { MdRemoveRedEye } from "react-icons/md";

// BillingPayments.js
export default function BillingPayments() {
  return (
    <div className="bg-white rounded-lg" style={{ width: "100%", height:    "435px" }}>
      <div className="p-3 shadow-xs rounded-lg">
        <div className="d-flex aling-items-center justify-content-between border-bottom pb-2" >
          <h3 className="text-lg font-bold">Billing & Payments</h3>
          <button className="text-white px-3 rounded fw-normal h-8" style={{ backgroundColor: "#0EABEB" }}>Create Bills</button>
        </div>
        <span className="d-flex py-2 text-md fw-semibold"><GoDotFill className="text-red-600 mt-1 me-1" />Pending Bills : 50</span>
        <div className="d-flex aling-items-center justify-content-center">
        <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400 rounded-lg">
        <thead className="text-xs text-gray-700 capitalize bg-gray-50">
            <tr className="flex justify-between items-center">
                <th scope="col" className="ps-2 py-3">
                    Bill No 
                </th>
                <th scope="col" className=" py-3">
                    Patient Name
                </th>
                <th scope="col" className=" py-3">
                    Dieses Name
                </th>
                <th scope="col" className=" py-3">
                    Status
                </th>
                <th scope="col" className=" py-3">
                    Action
                </th>
            </tr>
        </thead>
        <tbody>
            <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 flex justify-between items-center">
            <td className=" py-2 text-bold">
            <div className="bg-[#F6F8FB] text-[#718EBF] rounded-3xl d-flex align-items-center justify-content-center text-xs" style={{ width: "50px", height: "25px", fontWeight: "500" }}>5654</div>
        </td>
                <td className=" py-2 text-xs">
                    Charlie Vaccaro
                </td>
                <td className=" py-2 text-xs">
                    Colds and Flu
                </td>
                <td className="py-2 text-bold">
                <div className="bg-[#EBF5EC] text-[#39973D] rounded-3xl d-flex align-items-center justify-content-center text-xs" style={{ width: "60px", height: "25px", fontWeight: "500" }}>Paid</div>
            </td>
                <td className=" py-2">
                    <div className="d-flex align-items-center justify-content-center cursor-pointer">
                        <MdRemoveRedEye className="text-[#0EABEB] fs-6" />
                    </div>
                </td>
            </tr>
            <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 flex justify-between items-center">
            <td className=" py-2 text-bold">
            <div className="bg-[#F6F8FB] text-[#718EBF] rounded-3xl d-flex align-items-center justify-content-center text-xs" style={{ width: "50px", height: "25px", fontWeight: "500" }}>5654</div>
        </td>
                <td className=" py-2 text-xs">
                    Charlie Vaccaro
                </td>
                <td className=" py-2 text-xs">
                    Colds and Flu
                </td>
                <td className="py-2 text-bold">
                <div className="bg-[#FCE8EA] text-[#E11D29] rounded-3xl d-flex align-items-center justify-content-center text-xs" style={{ width: "60px", height: "25px", fontWeight: "500" }}>Unpaid</div>
            </td>
                <td className=" py-2">
                    <div className="d-flex align-items-center justify-content-center cursor-pointer">
                        <MdRemoveRedEye className="text-[#0EABEB] fs-6" />
                    </div>
                </td>
            </tr>
            <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 flex justify-between items-center">
            <td className=" py-2 text-bold">
            <div className="bg-[#F6F8FB] text-[#718EBF] rounded-3xl d-flex align-items-center justify-content-center text-xs" style={{ width: "50px", height: "25px", fontWeight: "500" }}>5654</div>
        </td>
                <td className=" py-2 text-xs">
                    Charlie Vaccaro
                </td>
                <td className=" py-2 text-xs">
                    Colds and Flu
                </td>
                <td className="py-2 text-bold">
                <div className="bg-[#EBF5EC] text-[#39973D] rounded-3xl d-flex align-items-center justify-content-center text-xs" style={{ width: "60px", height: "25px", fontWeight: "500" }}>Paid</div>
            </td>
                <td className=" py-2">
                    <div className="d-flex align-items-center justify-content-center cursor-pointer">
                        <MdRemoveRedEye className="text-[#0EABEB] fs-6" />
                    </div>
                </td>
            </tr>
            <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 flex justify-between items-center">
            <td className=" py-2 text-bold">
            <div className="bg-[#F6F8FB] text-[#718EBF] rounded-3xl d-flex align-items-center justify-content-center text-xs" style={{ width: "50px", height: "25px", fontWeight: "500" }}>5654</div>
        </td>
                <td className=" py-2 text-xs">
                    Charlie Vaccaro
                </td>
                <td className=" py-2 text-xs">
                    Colds and Flu
                </td>
                <td className="py-2 text-bold">
                <div className="bg-[#FCE8EA] text-[#E11D29] rounded-3xl d-flex align-items-center justify-content-center text-xs" style={{ width: "60px", height: "25px", fontWeight: "500" }}>Unpaid</div>
            </td>
                <td className=" py-2">
                    <div className="d-flex align-items-center justify-content-center cursor-pointer">
                        <MdRemoveRedEye className="text-[#0EABEB] fs-6" />
                    </div>
                </td>
            </tr>
            <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 flex justify-between items-center">
            <td className=" py-2 text-bold">
            <div className="bg-[#F6F8FB] text-[#718EBF] rounded-3xl d-flex align-items-center justify-content-center text-xs" style={{ width: "50px", height: "25px", fontWeight: "500" }}>5654</div>
        </td>
                <td className=" py-2 text-xs">
                    Charlie Vaccaro
                </td>
                <td className=" py-2 text-xs">
                    Colds and Flu
                </td>
                <td className="py-2 text-bold">
                <div className="bg-[#EBF5EC] text-[#39973D] rounded-3xl d-flex align-items-center justify-content-center text-xs" style={{ width: "60px", height: "25px", fontWeight: "500" }}>Paid</div>
            </td>
                <td className=" py-2">
                    <div className="d-flex align-items-center justify-content-center cursor-pointer">
                        <MdRemoveRedEye className="text-[#0EABEB] fs-6" />
                    </div>
                </td>
            </tr>
            <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 flex justify-between items-center">
            <td className=" py-2 text-bold">
            <div className="bg-[#F6F8FB] text-[#718EBF] rounded-3xl d-flex align-items-center justify-content-center text-xs" style={{ width: "50px", height: "25px", fontWeight: "500" }}>5654</div>
        </td>
                <td className=" py-2 text-xs">
                    Charlie Vaccaro
                </td>
                <td className=" py-2 text-xs">
                    Colds and Flu
                </td>
                <td className="py-2 text-bold">
                <div className="bg-[#FCE8EA] text-[#E11D29] rounded-3xl d-flex align-items-center justify-content-center text-xs" style={{ width: "60px", height: "25px", fontWeight: "500" }}>Unpaid</div>
            </td>
                <td className=" py-2">
                    <div className="d-flex align-items-center justify-content-center cursor-pointer">
                        <MdRemoveRedEye className="text-[#0EABEB] fs-6" />
                    </div>
                </td>
            </tr>
        </tbody>
    </table>
        </div>
      </div>
    </div>
  );
}


