import libraryImage from './assets/library.jpg';
import iPadImage from './assets/Ipad.png';
import { Button } from './components/Button';

export const Home = () => {
    return <>
        <div className="w-full h-[700px] bg-cover bg-center" style={{ backgroundImage: `url(${libraryImage})` }}>
            <div className="absolute inset-0 flex flex-col items-center justify-center text-white text-center px-4">
                <h1 className="text-4xl font-bold">EhViewer App [Official Download]</h1>
                <p className="text-lg mt-2">Discover manga like never before</p>
                <Button buttonText={"Download Now"} />
            </div>
        </div>
        <div className='flex justify-between items-center p-4'>
            <div className="w-[600px] h-[600px] bg-cover bg-center" style={{ backgroundImage: `url(${iPadImage})` }}>

            </div>
            <div className='w-[400px]'>
                <h1>What is EhViewer?</h1>
                <p>EhViewer is a mobile application available for Android and iOS, designed for anime comic enthusiasts. It offers a feature-rich platform to enhance your online manga reading experience.

                    With its intuitive interface, you can effortlessly organize and read your favorite manga on your smartphone without any hassle.

                    Whether you’re looking for the latest releases or revisiting older comics, EhViewer provides access to a vast collection. If small fonts are a concern, the zoom feature ensures a smooth and comfortable reading experience.

                    The app also allows you to save comics in custom folders for easy access. Plus, you never have to worry about losing your progress—EhViewer automatically saves your reading position, allowing you to resume exactly where you left off.

                    Its advanced search functionality lets you find comics by title, and you can further refine results based on year, artist, tags, and more.
                </p>
                <Button buttonText={"EhViewer"} />
            </div>
        </div>
        <div className="bg-blue-50 py-12">
            <div className="max-w-6xl mx-auto text-center">
                <h2 className="text-3xl font-bold text-blue-900">Features</h2>
                <p className="text-gray-600 mt-2">What unique features does Ehviewer app offer?</p>
            </div>

            <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto px-4">
                {featuresData.map((feature, index) => (
                    <div key={index} className="bg-white shadow-lg rounded-lg p-6">
                        <h3 className="text-lg font-semibold text-blue-900">{feature.title}</h3>
                        <p className="text-gray-600 mt-2">{feature.description}</p>
                    </div>
                ))}
            </div>
        </div>
        <div className="flex justify-center items-center py-12">
            <div className="w-full max-w-4xl bg-gradient-to-b from-blue-700 to-gray-900 text-white text-center p-8 rounded-lg shadow-lg">
                <h2 className="text-2xl font-bold">Join the Manga Revolution</h2>
                <p className="text-gray-300 mt-2">
                    Download EhViewer now and unlock a universe of manga comics at your fingertips.
                </p>
                <div className="mt-6 flex justify-center">
                    <button className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-3 px-6 rounded-full shadow-md transition duration-300">
                        Download EhViewer App
                    </button>
                </div>
            </div>
        </div>
        <div className="flex justify-center items-center py-12">
            <div className="w-full max-w-4xl bg-white text-center p-8 rounded-lg shadow-lg">
                <h2 className="text-2xl font-bold text-blue-700">Download Ehviewer App</h2>
                <p className="text-gray-800 mt-4">
                    Comic reading is one of the best ways to entertain yourself and to get a seamless online comic 
                    reading experience. Download the latest version of the app from here. Just hit the download button 
                    and within the blink of an eye, your online comic reader will be on your smartphone:
                </p>
                <span className="text-4xl mt-4 block">.</span> 
            </div>
        </div>
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 px-4">
                {downloadData.map((item, index) => (
                    <div key={index} className="bg-white shadow-lg rounded-lg p-6 text-center">
                        <h3 className="text-xl font-semibold text-blue-700">{item.title}</h3>
                        <p className="text-gray-700 mt-2">{item.description}</p>
                        {item.list && (
                            <ul className="text-gray-600 mt-3 text-left">
                                {item.list.map((line, i) => (
                                    <li key={i} className="mt-1">{line}</li>
                                ))}
                            </ul>
                        )}
                        <button className="mt-6 bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-6 rounded-full shadow-md transition duration-300 flex items-center justify-center mx-auto">
                            {item.buttonText} ➝
                        </button>
                    </div>
                ))}
            </div>
            <div className="flex justify-center items-center mt-12 px-4">
            <div className="w-full max-w-3xl bg-gradient-to-r from-blue-700 to-gray-900 text-white text-center py-6 rounded-lg shadow-lg">
                <h3 className="text-lg font-bold">Questions about EhViewer</h3>
                <button className="mt-4 bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-6 rounded-full shadow-md transition duration-300">
                    Click Here
                </button>
            </div>
        </div>
        <div className="flex flex-col items-center text-center py-12 px-4">
            <p className="text-lg text-gray-800 max-w-2xl">
                Ehviewer has transformed how I enjoy manga on my phone. Brilliant app!
            </p>
            <a href="#" className="text-blue-600 font-semibold mt-2 hover:underline">
                David Smith
            </a>
        </div>
    </>
}

const featuresData = [
    {
        title: "User-friendly interface",
        description: "Ehviewer app comes with an easy-to-use interface to make your online comic reading effortless and joyful. When you launch the app you get a search feature, new releases, and other categories to browse simply. You can apply different filters to get a specific result and you don’t need to be tech-savvy to use Ehviewer Apk."
    },
    {
        title: "Huge collection of comics",
        description: "Doesn’t matter if you are searching for a new release or an old one, on this app you will get a vast catalog of manga comics to kill your boredom. This app serves every comic lover’s need because of the availability of various genres of comics on its platform."
    },
    {
        title: "Top-notch security",
        description: "Because of online threats and malware, we hesitate to navigate random platforms and apps. But you don’t need to worry about your security while browsing Ehviewer as it doesn’t require any personal information."
    },
    {
        title: "Zoom feature for crystal-clear reading",
        description: "Don’t want to trouble your eyes? No need to do this as the Ehviewer app offers a zoom feature to enlarge small text for clear reading. Just zoom in on the text as per your vision and dive into the comic world."
    },
    {
        title: "Modify the app as per your choice",
        description: "If you don’t like the look of the app then you can modify it. The app usually provides various customization options, including theme changes, display settings, and more to tailor the browsing experience to the user’s preferences."
    },
    {
        title: "Download option",
        description: "One of the most notable features of the Ehviewer app is its download feature. If you want to read the comics in an offline mode then you can download the comics and enjoy them while you are not connected to the internet. Also, it enables you to change the download location and image resolution."
    },
    {
        title: "Create your favorite list",
        description: "User can create their list of favorite comics with a simple feature. Ehviewer comes with a tiny heart shape icon and for using it just choose a comic and tap on it. The comic will automatically be added to your favorite list."
    },
    {
        title: "Free",
        description: "Ehviewer is a free app so no need to spend your hard-earned bucks. To access the premium feature you need to go for a subscription."
    }
];

const downloadData = [
    {
        title: "System Requirements for Android",
        description: "Android 6.0 or newer.\nQuad-core 2.0 GHz (or higher)\n1 GB RAM and above recommended\n1+ GB Storage needed\n720px+ display",
        buttonText: "Download Apk"
    },
    {
        title: "System Requirements for iOS",
        description: "iOS 10 or higher version.\nTurned off Portrait orientation.\nTurn on Background app refresh.\nTurned off Low Power Mode.\nRequire iPhone 6 or above.",
        buttonText: "Download iOS"
    },
    {
        title: "Download Ehviewer Versions",
        list: [
            "EhViewer-arm64-v8a.apk",
            "EhViewer-armeabi-v7a.apk",
            "EhViewer-x86.apk",
            "Default All Versions",
            "Marshmallow’s Versions",
            "Source Code and Mapping",
            "EhViewer native debug symbols"
        ],
        buttonText: "Download all Versions"
    }
];