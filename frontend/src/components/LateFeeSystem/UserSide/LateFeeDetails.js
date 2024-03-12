import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';

function LateFeeDetails() {
    // const navigate = useNavigate();
    const [userDetails] = useState({ id: 2, user: { name: 'Jane Smith', picture: 'https://source.unsplash.com/random/100x100/?person' }, book: { name: 'Book 2', reservedDate: "25-01-2024", dueDate: "02-02-2024" }, fee: "$150" });
    const [showModal, setShowModal] = useState(false);
    const [modalContent, setModalContent] = useState('');

    const handleDisputeCharge = () => {
        // Logic to clear fee
        setModalContent('Successfully notified the admin!');
        setShowModal(true);
    };

    const closeModal = () => {
        setShowModal(false);
    };

    return (
        <div className='bg-aboutUsBrown flex-1 h-screen py-8'>
            <div className="container-xl mx-auto px-4 py-8 text-black bg-white rounded-lg">
                <div className="flex flex-col justify-between">
                    <div className='mb-4'>
                        <p className="text-3xl">Active Late Fee Details</p>
                    </div>
                    <div className='flex flex-row'>
                        <img className="w-40 h-40 mb-4" src={"https://source.unsplash.com/random/2000x2000/?book,title,page"} alt="Book" />
                        <div className='ml-4 flex flex-col justify-start items-start'>
                            <div className="mb-3">
                                <span className="text-gray-600">Book Name: </span>
                                <span className="text-lg font-bold">{userDetails.book.name}</span>
                            </div>
                            <div className="mb-3">
                                <span className="text-gray-600">Reserved Date: </span>
                                <span className="text-lg font-bold">{userDetails.book.reservedDate}</span>
                            </div>
                            <div className="mb-3">
                                <span className="text-gray-600">Due Date: </span>
                                <span className="text-lg font-bold">{userDetails.book.dueDate}</span>
                            </div>
                            <div className="mb-3">
                                <span className="text-gray-600">Amount Due: </span>
                                <span className="text-lg font-bold">{userDetails.fee}</span>
                            </div>
                        </div>
                    </div>
                    <div>
                        <p className='font-bold text-lg text-red-600'> Due by 3 days</p>
                        <p className='text-gray-600'> Please pay at library to avoid further charges or disruption in services! Have you already paid the fee? Click on the dispute charge button to notify the admin to clear your late fee!</p>
                        <p className='text-gray-600'> </p>
                    </div>
                    <div className="flex justify-center">
                        <button onClick={handleDisputeCharge} className="bg-navbarBrown hover:bg-hoverNavbarBrown text-white font-bold py-2 px-4 rounded">
                            Dispute Charge
                        </button>
                    </div>
                </div>


                {showModal && (
                    <div className="fixed z-10 inset-0 overflow-y-auto">
                        <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
                            <div className="fixed inset-0 transition-opacity" aria-hidden="true">
                                <div className="absolute inset-0 bg-gray-500 opacity-75"></div>
                            </div>
                            <span className="hidden sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true">&#8203;</span>
                            <div className="inline-block align-center bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full">
                                <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                                    <div className="sm:flex items-end justify-end">
                                        <div onClick={() => closeModal()} className="cursor-pointer flex-shrink-0 flex items-center justify-center h-12 w-12 rounded-full hover:bg-hoverNavbarBrown bg-navbarBrown sm:mx-0 sm:h-10 sm:w-10">
                                            <svg className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                            </svg>
                                        </div>
                                    </div>
                                    <div className="mt-4">
                                        <p className="text-lg text-center mb-8 leading-6 font-medium text-gray-900">{modalContent}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                )}
                <hr class="h-px my-8 bg-gray-200 border-0 dark:bg-gray-700"></hr>
                <div>
                    <p className="text-3xl">Past Late Fee Details</p>
                    <p className="text-center text-gray-600">No past late fees found!</p>
                </div>
            </div>
        </div>
    );
}

export default LateFeeDetails;