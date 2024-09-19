export default function Pricing(){
    return(
        <div className="w-full">
            <h2 className="text-3xl font-bold text-center mb-8">Choose Your Plan</h2>
            <div className="flex flex-col lg:flex-row gap-8">
                <div className="bg-white rounded-lg shadow-md p-6 flex flex-col flex-1">
                    <h3 className="text-xl font-semibold mb-4">Basic</h3>
                    <p className="text-gray-600 mb-4">For individuals just getting started</p>
                    <p className="text-4xl font-bold mb-6">$9<span class="text-xl font-normal text-gray-600">/month</span></p>
                    <ul className="mb-6 flex-grow">
                        <li className="flex items-center mb-2">
                            <svg className="w-5 h-5 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path></svg>
                            1 User
                        </li>
                        <li className="flex items-center mb-2">
                            <svg className="w-5 h-5 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path></svg>
                            5GB Storage
                        </li>
                        <li className="flex items-center mb-2">
                            <svg className="w-5 h-5 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path></svg>
                            Basic Support
                        </li>
                    </ul>
                    <button className="bg-blue-600 text-white rounded-md py-2 px-4 hover:bg-blue-700 transition duration-300">Choose Plan</button>
                </div>
                <div className="bg-white rounded-lg shadow-md p-6 flex flex-col flex-1 border-2 border-blue-600">
                    <h3 className="text-xl font-semibold mb-4">Pro</h3>
                    <p className="text-gray-600 mb-4">For growing businesses</p>
                    <p className="text-4xl font-bold mb-6">$29<span className="text-xl font-normal text-gray-600">/month</span></p>
                    <ul className="mb-6 flex-grow">
                        <li className="flex items-center mb-2">
                            <svg className="w-5 h-5 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path></svg>
                            5 Users
                        </li>
                        <li className="flex items-center mb-2">
                            <svg className="w-5 h-5 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path></svg>
                            50GB Storage
                        </li>
                        <li className="flex items-center mb-2">
                            <svg className="w-5 h-5 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path></svg>
                            Priority Support
                        </li>
                        <li className="flex items-center mb-2">
                            <svg className="w-5 h-5 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path></svg>
                            Advanced Features
                        </li>
                    </ul>
                    <button className="bg-blue-600 text-white rounded-md py-2 px-4 hover:bg-blue-700 transition duration-300">Choose Plan</button>
                </div>
                <div className="bg-white rounded-lg shadow-md p-6 flex flex-col flex-1">
                    <h3 className="text-xl font-semibold mb-4">Enterprise</h3>
                    <p className="text-gray-600 mb-4">For large-scale operations</p>
                    <p className="text-4xl font-bold mb-6">$99<span className="text-xl font-normal text-gray-600">/month</span></p>
                    <ul className="mb-6 flex-grow">
                        <li className="flex items-center mb-2">
                            <svg className="w-5 h-5 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path></svg>
                            Unlimited Users
                        </li>
                        <li className="flex items-center mb-2">
                            <svg className="w-5 h-5 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path></svg>
                            500GB Storage
                        </li>
                        <li className="flex items-center mb-2">
                            <svg className="w-5 h-5 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path></svg>
                            24/7 Dedicated Support
                        </li>
                        <li className="flex items-center mb-2">
                            <svg className="w-5 h-5 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path></svg>
                            Custom Solutions
                        </li>
                    </ul>
                    <button className="bg-blue-600 text-white rounded-md py-2 px-4 hover:bg-blue-700 transition duration-300">Contact Sales</button>
                </div>
            </div>
        </div>
    )
}