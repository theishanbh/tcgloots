import React from 'react'

export default function TileDesktopView() {
    return (
        <div>
            <table className="table-auto">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Store</th>
                        <th>Status</th>
                        <th>Last Price</th>
                        <th>Last Stock</th>
                        <th>Track</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>The Sliding Mr. Bones (Next Stop, Pottersville)</td>
                        <td>Malcolm Lockyer</td>
                        <td>1961</td>
                    </tr>
                    <tr>
                        <td>Witchy Woman</td>
                        <td>The Eagles</td>
                        <td>1972</td>
                    </tr>
                    <tr>
                        <td>Shining Star</td>
                        <td>Earth, Wind, and Fire</td>
                        <td>1975</td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}
