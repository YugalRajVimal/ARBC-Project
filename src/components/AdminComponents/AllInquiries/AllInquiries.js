import React, { useEffect, useState } from 'react';
import { getAllInquiries } from '../../../api/AdminAPI/adminAPI';

const AllInquiries = () => {
    const [inquiries, setInquiries] = useState([]);
    const [showDetails, setShowDetails] = useState({});
    const [filter, setFilter] = useState('All');

    useEffect(() => {
        getAllInquiries().then((data) => {
            setInquiries(data.inquiries);
        });
    }, []);

    const toggleDetails = (id) => {
        setShowDetails((prevState) => ({
            ...prevState,
            [id]: !prevState[id],
        }));
    };

    const filteredInquiries = inquiries.filter((inquiry) => {
        if (filter === 'All') return true;
        if(filter === 'Active') return inquiry.status === 'Active' ;
        if(filter === 'Pending') return inquiry.status === 'Pending';
        if(filter === 'Completed') return inquiry.status === 'Completed';
        return inquiry.status === filter;
    });

    if(filteredInquiries.length === 0) {
        return <h1 className="text-center text-2xl font-bold mt-10">No Inquiries</h1>;
    }

    return (
        <div className="container mx-auto p-4 h-full overflow-y-auto">
            <h1 className="text-3xl font-bold mb-6 text-center">Inquiries</h1>
            <div className="flex justify-center mb-6">
                {['All', 'Active', 'Pending', 'Completed'].map((status) => (
                    <button
                        key={status}
                        onClick={() => setFilter(status)}
                        className={`mx-2 px-4 py-2 rounded ${
                            filter === status ? 'bg-blue-600 text-white' : 'bg-gray-200 text-gray-700'
                        } hover:bg-blue-500 transition`}
                    >
                        {status}
                    </button>
                ))}
            </div>
            <ul>
                {filteredInquiries.map((inquiry) => (
                    <li key={inquiry._id} className="border rounded-lg p-4 mb-6 shadow-md">
                        <div className="flex justify-between items-center">
                            <div>
                                <strong>From:</strong> {inquiry.user.name} ({inquiry.user.email})<br />
                                <strong>Product:</strong> {inquiry.product.productName}<br />
                                <strong>Status:</strong> {inquiry.status}<br />
                            </div>
                            <button 
                                onClick={() => toggleDetails(inquiry._id)}
                                className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition"
                            >
                                {showDetails[inquiry._id] ? 'Hide Details' : 'Show Details'}
                            </button>
                        </div>
                        {showDetails[inquiry._id] && (
                            <div className="mt-4">
                                <h4 className="text-xl font-semibold mb-2">Product Details:</h4>
                                <p>
                                    <strong>Price:</strong> {inquiry.product.productPrice} / {inquiry.product.productUnitType}<br />
                                    <strong>Quantity:</strong> {inquiry.product.productQuantity}<br />
                                    <strong>Overview:</strong> {inquiry.product.productOverview}<br />
                                    <strong>Specifications:</strong>
                                    <ul className="list-disc list-inside ml-4">
                                        {inquiry.product.productSpecifications.map(spec => (
                                            <li key={spec._id}>
                                                <strong>{spec.name}:</strong> {spec.value}
                                            </li>
                                        ))}
                                    </ul>
                                    {/* <strong>Category ID:</strong> {inquiry.product.categoryId}<br />
                                    <strong>Subcategory ID:</strong> {inquiry.product.subCategoryId}<br /> */}
                                    {/* <strong>Created At:</strong> {new Date(inquiry.product.createdAt).toLocaleString()}<br />
                                    <strong>Updated At:</strong> {new Date(inquiry.product.updatedAt).toLocaleString()} */}
                                </p>
                                <h4 className="text-xl font-semibold mt-4 mb-2">User Details:</h4>
                                <p>
                                    <strong>Name:</strong> {inquiry.user.name}<br />
                                    <strong>Email:</strong> {inquiry.user.email}<br />
                                    <strong>Phone No:</strong> {inquiry.user.phoneNo}<br />
                                    <strong>Role:</strong> {inquiry.user.role.join(', ')}<br />
                                    <strong>Verified Seller:</strong> {inquiry.user.verifiedSeller ? 'Yes' : 'No'}<br />
                                    <strong>Verified Buyer:</strong> {inquiry.user.verifiedBuyer ? 'Yes' : 'No'}<br />
                                    <strong>Seller Details Completed:</strong> {inquiry.user.isSellerDetailsCompleted ? 'Yes' : 'No'}
                                </p>
                            </div>
                        )}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default AllInquiries;
