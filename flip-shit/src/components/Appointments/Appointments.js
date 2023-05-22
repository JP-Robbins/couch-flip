import React, { useState } from 'react';

const Appointments = () => {
   const [appointment, setAppointment] = useState({
        name: '',
        email: '',
        date: '',
        time: '',
    });

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(appointment);
         // You can add your own logic here to submit the form data to a server or API
    };

    const handleChange = (event) => {
        const { name, value } = event.target;
        setAppointment(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    return (
        <div className='bg-emerald-200 mt-4 rounded-md pb-4'>
          <h2>Book an Appointment</h2>
          <form onSubmit={handleSubmit}>
            <label htmlFor="name">Name:</label>
            <input type="text" id="name" name="name" value={appointment.name} onChange={handleChange} required />

            <label htmlFor="email">Email:</label>
            <input type="email" id="email" name="email" value={appointment.email} onChange={handleChange} required />

            <label htmlFor="date">Date:</label>
            <input type="date" id="date" name="date" value={appointment.date} onChange={handleChange} required />

            <label htmlFor="time">Time:</label>
            <input type="time" id="time" name="time" value={appointment.time} onChange={handleChange} required />

            <button type="submit">Book Appointment</button>
          </form>
        </div>
      );
    };

    export default Appointments;


