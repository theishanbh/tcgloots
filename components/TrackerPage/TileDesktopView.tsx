import React from 'react'
import ButtonLiveDeal from '../Livedeals/ButtonLiveDeal'
import Image from 'next/image'
export default function TileDesktopView() {
    return (
        <div>
            <table className="w-full divide-y  divide-grey-600">
                <thead>
                    <tr className="space-x-4">
                        <th className="flex justify-start font-jost font-medium text-xl text-grey-400">Name</th>
                        <th className=" font-jost font-medium text-xl text-grey-400 ">Store</th>
                        <th className=" font-jost font-medium text-xl text-grey-400 ">Status</th>
                        <th className=" font-jost font-medium text-xl text-grey-400 ">Last Price</th>
                        <th className=" font-jost font-medium text-xl text-grey-400 ">Last Stock</th>
                        <th className=" font-jost font-medium text-xl text-grey-400 ">Track</th>
                    </tr>
                </thead>
                <tbody className='divide-y  divide-grey-600'>
                    <tr className="">
                        <td className='font-jost text-sm font-medium text-black-100'>Category name 1</td>
                    </tr>
                    <tr className="">
                        <td className='font-jost w-72 text-sm text-grey-200'>Celebrations Collection Lance’s Charizard V</td>
                        <td className='font-jost text-sm text-grey-200'>Gamestop</td>
                        <td className='font-jost text-sm text-grey-200'>Out of Stock</td>
                        <td className='font-jost text-sm text-grey-200'>$29.99</td>
                        <td className='font-jost text-sm text-grey-200'>Jan 06  - 4:11 PM</td>
                        <td><button className="bg-blue-300 w-28 font-jost text-sm text-white-100 rounded-md ">
                            <div className="flex justify-center items-center px-2 py-2 ">
                                <span>Added</span>
                            </div>
                        </button></td>
                    </tr>
                    <tr className="py-1">
                        <td className='font-jost text-sm text-grey-200'>Product Name: Gamestop</td>
                        <td className='font-jost text-sm text-grey-200'>Target</td>
                        <td className='font-jost text-sm text-green-100 '>In Stock</td>
                        <td className='font-jost text-sm text-grey-200'>$29.99</td>
                        <td className='font-jost text-sm text-grey-200'>Jan 06  - 4:11 PM</td>
                        <td className='w-28'><ButtonLiveDeal notificationCount={0}>Add</ButtonLiveDeal></td>
                    </tr>
                    <tr className="py-1">
                        <td className='font-jost text-sm text-grey-200'>Productname</td>
                        <td className='font-jost text-sm text-grey-200'></td>
                        <td className='font-jost text-sm text-grey-200'>Out of Stock</td>
                        <td className='font-jost text-sm text-grey-200'>$29.99</td>
                        <td className='font-jost text-sm text-grey-200'>Jan 06  - 4:11 PM</td>
                        <td className='w-28'><ButtonLiveDeal notificationCount={0}>Add</ButtonLiveDeal></td>
                    </tr>
                    <tr className="py-1">
                        <td className='font-jost text-sm text-grey-200'>Product Name</td>
                        <td className='font-jost text-sm text-grey-200'></td>
                        <td className='font-jost text-sm text-green-100 '>In Stock</td>
                        <td className='font-jost text-sm text-grey-200'>$29.99</td>
                        <td className='font-jost text-sm text-grey-200'>Jan 06  - 4:11 PM</td>
                        <td ><button className="bg-blue-300  w-28  font-jost text-sm text-white-100 rounded-md ">
                            <div className="flex justify-center items-center py-2 ">
                                <span>Added</span>
                            </div>
                        </button></td>
                    </tr>
                    <tr className="">
                        <td className='font-jost text-sm font-medium text-black-100'>Category name 2</td>
                    </tr>
                    <tr className="">
                        <td className='font-jost text-sm text-grey-200'>Celebrations Collection Lance’s Charizard V</td>
                        <td className='font-jost text-sm text-grey-200'>Gamestop</td>
                        <td className='font-jost text-sm text-grey-200'>Out of Stock</td>
                        <td className='font-jost text-sm text-grey-200'>$29.99</td>
                        <td className='font-jost text-sm text-grey-200'>Jan 06  - 4:11 PM</td>
                        <td><button className="bg-blue-300 w-28 font-jost text-sm text-white-100 rounded-md ">
                            <div className="flex justify-center items-center px-2 py-2 ">
                                <span>Added</span>
                            </div>
                        </button></td>
                    </tr>
                    <tr className="py-1">
                        <td className='font-jost text-sm text-grey-200'>Product Name: Gamestop</td>
                        <td className='font-jost text-sm text-grey-200'>Target</td>
                        <td className='font-jost text-sm text-green-100 '>In Stock</td>
                        <td className='font-jost text-sm text-grey-200'>$29.99</td>
                        <td className='font-jost text-sm text-grey-200'>Jan 06  - 4:11 PM</td>
                        <td className='w-28'><ButtonLiveDeal notificationCount={0}>Add</ButtonLiveDeal></td>
                    </tr>
                    <tr className="py-1">
                        <td className='font-jost text-sm text-grey-200'>Productname</td>
                        <td className='font-jost text-sm text-grey-200'></td>
                        <td className='font-jost text-sm text-grey-200'>Out of Stock</td>
                        <td className='font-jost text-sm text-grey-200'>$29.99</td>
                        <td className='font-jost text-sm text-grey-200'>Jan 06  - 4:11 PM</td>
                        <td className='w-28'><ButtonLiveDeal notificationCount={0}>Add</ButtonLiveDeal></td>
                    </tr>
                    <tr className="py-1">
                        <td className='font-jost text-sm text-grey-200'>Product Name</td>
                        <td className='font-jost text-sm text-grey-200'></td>
                        <td className='font-jost text-sm text-green-100 '>In Stock</td>
                        <td className='font-jost text-sm text-grey-200'>$29.99</td>
                        <td className='font-jost text-sm text-grey-200'>Jan 06  - 4:11 PM</td>
                        <td ><button className="bg-blue-300  w-28  font-jost text-sm text-white-100 rounded-md ">
                            <div className="flex justify-center items-center py-2 ">
                                <span>Added</span>
                            </div>
                        </button></td>
                    </tr>
                    <tr className="">
                        <td className='font-jost text-sm font-medium text-black-100'>Category name 3</td>
                    </tr>
                    <tr className="">
                        <td className='font-jost text-sm text-grey-200'>Celebrations Collection Lance’s Charizard V</td>
                        <td className='font-jost text-sm text-grey-200'>Gamestop</td>
                        <td className='font-jost text-sm text-grey-200'>Out of Stock</td>
                        <td className='font-jost text-sm text-grey-200'>$29.99</td>
                        <td className='font-jost text-sm text-grey-200'>Jan 06  - 4:11 PM</td>
                        <td><button className="bg-blue-300 w-28 font-jost text-sm text-white-100 rounded-md ">
                            <div className="flex justify-center items-center px-2 py-2 ">
                                <span>Added</span>
                            </div>
                        </button></td>
                    </tr>
                    <tr className="py-1">
                        <td className='font-jost text-sm text-grey-200'>Product Name: Gamestop</td>
                        <td className='font-jost text-sm text-grey-200'>Target</td>
                        <td className='font-jost text-sm text-green-100 '>In Stock</td>
                        <td className='font-jost text-sm text-grey-200'>$29.99</td>
                        <td className='font-jost text-sm text-grey-200'>Jan 06  - 4:11 PM</td>
                        <td className='w-28'><ButtonLiveDeal notificationCount={0}>Add</ButtonLiveDeal></td>
                    </tr>
                    <tr className="py-1">
                        <td className='font-jost text-sm text-grey-200'>Productname</td>
                        <td className='font-jost text-sm text-grey-200'></td>
                        <td className='font-jost text-sm text-grey-200'>Out of Stock</td>
                        <td className='font-jost text-sm text-grey-200'>$29.99</td>
                        <td className='font-jost text-sm text-grey-200'>Jan 06  - 4:11 PM</td>
                        <td className='w-28'><ButtonLiveDeal notificationCount={0}>Add</ButtonLiveDeal></td>
                    </tr>
                    <tr className="py-1">
                        <td className='font-jost text-sm text-grey-200'>Product Name</td>
                        <td className='font-jost text-sm text-grey-200'></td>
                        <td className='font-jost text-sm text-green-100 '>In Stock</td>
                        <td className='font-jost text-sm text-grey-200'>$29.99</td>
                        <td className='font-jost text-sm text-grey-200'>Jan 06  - 4:11 PM</td>
                        <td ><button className="bg-blue-300  w-28  font-jost text-sm text-white-100 rounded-md ">
                            <div className="flex justify-center items-center py-2 ">
                                <span>Added</span>
                            </div>
                        </button></td>
                    </tr>
                    <tr className="">
                        <td className='font-jost text-sm text-grey-200'>Celebrations Collection Lance’s Charizard V</td>
                        <td className='font-jost text-sm text-grey-200'>Gamestop</td>
                        <td className='font-jost text-sm text-grey-200'>Out of Stock</td>
                        <td className='font-jost text-sm text-grey-200'>$29.99</td>
                        <td className='font-jost text-sm text-grey-200'>Jan 06  - 4:11 PM</td>
                        <td><button className="bg-blue-300 w-28 font-jost text-sm text-white-100 rounded-md ">
                            <div className="flex justify-center items-center px-2 py-2 ">
                                <span>Added</span>
                            </div>
                        </button></td>
                    </tr>
                    <tr className="py-1">
                        <td className='font-jost text-sm text-grey-200'>Product Name: Gamestop</td>
                        <td className='font-jost text-sm text-grey-200'>Target</td>
                        <td className='font-jost text-sm text-green-100 '>In Stock</td>
                        <td className='font-jost text-sm text-grey-200'>$29.99</td>
                        <td className='font-jost text-sm text-grey-200'>Jan 06  - 4:11 PM</td>
                        <td className='w-28'><ButtonLiveDeal notificationCount={0}>Add</ButtonLiveDeal></td>
                    </tr>
                    <tr className="py-1">
                        <td className='font-jost text-sm text-grey-200'>Productname</td>
                        <td className='font-jost text-sm text-grey-200'></td>
                        <td className='font-jost text-sm text-grey-200'>Out of Stock</td>
                        <td className='font-jost text-sm text-grey-200'>$29.99</td>
                        <td className='font-jost text-sm text-grey-200'>Jan 06  - 4:11 PM</td>
                        <td className='w-28'><ButtonLiveDeal notificationCount={0}>Add</ButtonLiveDeal></td>
                    </tr>
                    <tr className="py-1">
                        <td className='font-jost text-sm text-grey-200'>Product Name</td>
                        <td className='font-jost text-sm text-grey-200'></td>
                        <td className='font-jost text-sm text-green-100 '>In Stock</td>
                        <td className='font-jost text-sm text-grey-200'>$29.99</td>
                        <td className='font-jost text-sm text-grey-200'>Jan 06  - 4:11 PM</td>
                        <td ><button className="bg-blue-300  w-28  font-jost text-sm text-white-100 rounded-md ">
                            <div className="flex justify-center items-center py-2 ">
                                <span>Added</span>
                            </div>
                        </button></td>
                    </tr>
                    <tr></tr>
                </tbody>
            </table>
        </div>
    )
}
