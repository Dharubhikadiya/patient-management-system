import React, { useState } from 'react';
   import DatePicker from 'react-datepicker';
   import 'react-datepicker/dist/react-datepicker.css';
   import moment from 'moment';

   const DateSelector = () => {
       const [startDate, setStartDate] = useState(new Date());
       const [endDate, setEndDate] = useState(new Date());
       const [isOpen, setIsOpen] = useState(false);

       const handleToggle = () => {
           setIsOpen(!isOpen);
       };

       return (
           <div>
               <button onClick={handleToggle}>
                   📅 {moment(startDate).format('D MMMM, YYYY')} • {moment(endDate).format('D MMMM, YYYY')}
               </button>
               {isOpen && (
                   <div>
                       <DatePicker
                           selected={startDate}
                           onChange={(date) => setStartDate(date)}
                           startDate={startDate}
                           endDate={endDate}
                           selectsRange
                           inline
                       />
                   </div>
               )}
           </div>
       );
   };

   export default DateSelector;